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
  TempSaveAndSubmitButton,
} from '@/components';
import { PATH_NAME } from '@/constants';
import { Application } from '@/types/dto';
import { useRouter } from 'next/router';
import { MutableRefObject, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ApplyFormValues } from '../PersonalInformation/PersonalInformation.component';
import * as Styled from './ApplyForm.styled';

interface ApplyFormProps {
  application: Application;
  isSubmitted: boolean;
}

const ApplyForm = ({ application, isSubmitted }: ApplyFormProps) => {
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
    formState: { isDirty },
  } = applyForm;

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
            <TempSaveAndSubmitButton
              applicationId={applicationId}
              applyForm={applyForm}
              questionsAndAnswers={questionsAndAnswers}
              setIsOpenTempSaveFailedAlertModal={setIsOpenTempSaveFailedAlertModal}
              setIsOpenTempSaveSuccessAlertModal={setIsOpenTempSaveSuccessAlertModal}
              setIsRequesting={setIsRequesting}
              setIsTempSaved={setIsTempSaved}
              refs={{ submitButtonRef, tempSaveButtonRef }}
            />
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
