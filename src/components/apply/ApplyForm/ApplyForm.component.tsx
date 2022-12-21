import { applicationApiService } from '@/api/services';
import {
  LoadingModal,
  PersonalInformation,
  QuestionAndAnswerList,
  BlockingConfirmModalDialog,
  TempSaveModalDialog,
  SubmitModalDialog,
  BackToListLink,
  SubmittedButton,
  PersonalInfoAgree,
} from '@/components';
import { PATH_NAME } from '@/constants';
import { Application } from '@/types/dto';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ApplyFormValues,
  APPLY_FORM_KEYS,
} from '../PersonalInformation/PersonalInformation.component';
import * as Styled from './ApplyForm.styled';

interface ApplyFormProps {
  application: Application;
  isSubmitted: boolean;
}

const ApplyForm = ({ application, isSubmitted }: ApplyFormProps) => {
  const session = useSession();
  const router = useRouter();

  const tempSaveButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const submitButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const [isRequesting, setIsRequesting] = useState(false);
  const [isTempSaved, setIsTempSaved] = useState(false);

  const [isOpenTempSaveSuccessAlertModal, setIsOpenTempSaveSuccessAlertModal] = useState(false);
  const [isOpenTempSaveFailedAlertModal, setIsOpenTempSaveFailedAlertModal] = useState(false);
  const [isOpenConfirmSubmittedModal, setIsOpenConfirmSubmittedModal] = useState(false);
  const [isOpenSuccessSubmittedModal, setIsOpenSuccessSubmittedModal] = useState(false);

  const { questions, applicationId, answers, applicant } = application;

  const questionsAndAnswers = questions.map((question, index) => {
    const questionMatchAnswer =
      answers.find(({ questionId }) => question.questionId === questionId) || answers[index];

    if (isSubmitted && router.pathname === PATH_NAME.APPLY_PAGE) {
      return { question, answer: { ...questionMatchAnswer, content: '' } };
    }

    return { question, answer: questionMatchAnswer };
  });

  const applyForm = useForm<ApplyFormValues>();
  const {
    handleSubmit,
    watch,
    trigger,
    setFocus,
    formState: { isDirty },
  } = applyForm;

  const handleTempSaveApplication: MouseEventHandler<HTMLButtonElement> = async () => {
    if (session.status === 'unauthenticated') return;

    const { userName, phone, isAgreePersonalInfo, birthdate, department, residence } = watch();

    if (!(await trigger(APPLY_FORM_KEYS.userName))) {
      setFocus(APPLY_FORM_KEYS.userName);
      return;
    }

    if (!(await trigger(APPLY_FORM_KEYS.phone))) {
      setFocus(APPLY_FORM_KEYS.phone);
      return;
    }

    if (!(await trigger(APPLY_FORM_KEYS.birthdate))) {
      setFocus(APPLY_FORM_KEYS.birthdate);
      return;
    }

    const updateApplicationRequest = {
      applicantName: userName,
      phoneNumber: phone,
      privacyPolicyAgreed: isAgreePersonalInfo,
      birthdate,
      department,
      residence,
      answers: questionsAndAnswers.map(({ question, answer }) => {
        const uniqueQuestionId = `question-${question.questionId}`;

        return {
          answerId: answer.answerId,
          questionId: question.questionId,
          content: watch(uniqueQuestionId),
        };
      }),
    };

    setIsRequesting(true);
    try {
      await applicationApiService.tempSaveApplication({
        accessToken: session.data?.accessToken,
        applicationId,
        updateApplicationRequest,
      });

      setIsRequesting(false);
      setIsOpenTempSaveSuccessAlertModal(true);
      setIsTempSaved(true);
    } catch (error) {
      setIsRequesting(false);
      setIsOpenTempSaveFailedAlertModal(true);
    }
  };

  const handleOpenSubmitModal = () => {
    setIsOpenConfirmSubmittedModal(true);
  };

  const isCurrentlyOnDetailPage = router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL;
  const isDetailPageAndSubmitted = isSubmitted && isCurrentlyOnDetailPage;

  return (
    <>
      <form onSubmit={handleSubmit(handleOpenSubmitModal)}>
        <PersonalInformation
          applicant={applicant}
          applyForm={applyForm}
          isDetailPageAndSubmitted={isDetailPageAndSubmitted}
        />
        <QuestionAndAnswerList
          applyForm={applyForm}
          questionsAndAnswers={questionsAndAnswers}
          isDetailPageAndSubmitted={isDetailPageAndSubmitted}
        />
        <PersonalInfoAgree
          applyForm={applyForm}
          isDetailPageAndSubmitted={isDetailPageAndSubmitted}
        />
        <Styled.ControlSection>
          {isSubmitted ? (
            <SubmittedButton
              application={application}
              isCurrentlyOnDetailPage={isCurrentlyOnDetailPage}
            />
          ) : (
            <>
              <Styled.TempSaveButton
                type="button"
                disabled={!watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
                onClick={handleTempSaveApplication}
                ref={tempSaveButtonRef}
              >
                임시저장하기
              </Styled.TempSaveButton>
              <Styled.SubmitButton
                disabled={!watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
                ref={submitButtonRef}
              >
                제출하기
              </Styled.SubmitButton>
            </>
          )}
          <BackToListLink application={application} />
        </Styled.ControlSection>
      </form>
      <BlockingConfirmModalDialog
        isDirty={isDirty}
        isOpenSuccessSubmittedModal={isOpenSuccessSubmittedModal}
        isTempSaved={isTempSaved}
      />
      <TempSaveModalDialog
        isOpenTempSaveFailedAlertModal={isOpenTempSaveFailedAlertModal}
        isOpenTempSaveSuccessAlertModal={isOpenTempSaveSuccessAlertModal}
        setIsOpenTempSaveFailedAlertModal={setIsOpenTempSaveFailedAlertModal}
        setIsOpenTempSaveSuccessAlertModal={setIsOpenTempSaveSuccessAlertModal}
        tempSaveButtonRef={tempSaveButtonRef}
      />
      <SubmitModalDialog
        applicationId={applicationId}
        applyForm={applyForm}
        isOpenConfirmSubmittedModal={isOpenConfirmSubmittedModal}
        isOpenSuccessSubmittedModal={isOpenSuccessSubmittedModal}
        setIsOpenConfirmSubmittedModal={setIsOpenConfirmSubmittedModal}
        setIsOpenSuccessSubmittedModal={setIsOpenSuccessSubmittedModal}
        setIsRequesting={setIsRequesting}
        setIsTempSaved={setIsTempSaved}
        questionsAndAnswers={questionsAndAnswers}
        submitButtonRef={submitButtonRef}
      />
      {isRequesting && <LoadingModal setIsOpenModal={setIsRequesting} />}
    </>
  );
};

export default ApplyForm;
