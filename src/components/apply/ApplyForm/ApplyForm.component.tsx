import { applicationApiService } from '@/api/services';
import {
  AlertModalDialog,
  ConfirmModalDialog,
  LabeledCheckbox,
  LabeledInput,
  LabeledTextArea,
  LoadingModal,
} from '@/components';
import { HOME_PAGE, MY_PAGE_APPLICATION_DETAIL, PATH_NAME } from '@/constants';
import { usePreventPageChange } from '@/hooks';
import { ValueOf } from '@/types';
import { Application } from '@/types/dto';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as Styled from './ApplyForm.styled';

interface ApplyFormProps {
  application: Application;
  isSubmitted: boolean;
}

interface ApplyFormValues extends FieldValues {
  userName: string;
  email: string;
  phone: string;
  isAgreePersonalInfo: boolean;
}

const APPLY_FORM_KEYS = {
  userName: 'userName',
  email: 'email',
  phone: 'phone',
  isAgreePersonalInfo: 'isAgreePersonalInfo',
} as const;

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
  const [isOpenFailedSubmittedModal, setIsOpenFailedSubmittedModal] = useState(false);
  const [isOpenBlockingConfirmModal, setIsOpenBlockingConfirmModal] = useState(false);
  const [isOpenSuccessSubmittedModal, setIsOpenSuccessSubmittedModal] = useState(false);

  const handleCloseBlockingConfirmModal = () => {
    setIsOpenBlockingConfirmModal(false);
  };

  const handleCloseTempSaveAlertModal = (
    setIsOpenAlertModal: Dispatch<SetStateAction<boolean>>,
  ) => {
    setIsOpenAlertModal(false);
  };

  const { questions, applicationId, answers, applicant } = application;

  const questionsAndAnswers = questions.map((question, index) => {
    const questionMatchAnswer =
      answers.find(({ questionId }) => question.questionId === questionId) || answers[index];

    if (isSubmitted && router.pathname === PATH_NAME.APPLY_PAGE) {
      return { question, answer: { ...questionMatchAnswer, content: '' } };
    }

    return { question, answer: questionMatchAnswer };
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    setFocus,
    formState: { errors, isDirty },
  } = useForm<ApplyFormValues>();

  const { handleMoveAfterBlocking } = usePreventPageChange(setIsOpenBlockingConfirmModal, [
    isOpenBlockingConfirmModal,
    isOpenSuccessSubmittedModal,
    !isDirty,
    isTempSaved,
  ]);

  const handleReplacePhoneNumber: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const onlyNumberReg = /[^0-9]/g;

    if (onlyNumberReg.exec(currentTarget.value)) {
      setValue(APPLY_FORM_KEYS.phone, currentTarget.value.replace(onlyNumberReg, ''));
    }

    const restNumber = currentTarget.value.slice(3);
    const phoneNumberArr = [
      currentTarget.value.slice(0, 3),
      restNumber.slice(0, 4),
      restNumber.slice(4),
    ];

    const replacedPhoneNumber = phoneNumberArr.filter((isEmptyStr) => isEmptyStr).join('-');

    setValue(APPLY_FORM_KEYS.phone, replacedPhoneNumber);
  };

  const handleValidateForm = (formKey: ValueOf<ApplyFormValues>) => {
    trigger(formKey);
  };

  const handleTempSaveApplication: MouseEventHandler<HTMLButtonElement> = async () => {
    if (session.status === 'unauthenticated') return;

    const { userName, phone, isAgreePersonalInfo } = watch();

    if (!(await trigger('userName'))) {
      setFocus('userName');
      return;
    }

    if (!(await trigger('phone'))) {
      setFocus('phone');
      return;
    }

    const updateApplicationRequest = {
      applicantName: userName,
      phoneNumber: phone,
      privacyPolicyAgreed: isAgreePersonalInfo,
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

  const handleSubmitApplication = async () => {
    if (session.status === 'unauthenticated') return;

    const { userName, phone, isAgreePersonalInfo } = watch();

    const applicationSubmitRequest = {
      applicantName: userName,
      phoneNumber: phone,
      privacyPolicyAgreed: isAgreePersonalInfo,
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
      await applicationApiService.submitApplication({
        accessToken: session.data?.accessToken,
        applicationId,
        applicationSubmitRequest,
      });

      setIsRequesting(false);
      setIsOpenConfirmSubmittedModal(false);
      setIsOpenSuccessSubmittedModal(true);
    } catch (error) {
      setIsRequesting(false);
      setIsOpenFailedSubmittedModal(true);
    }
  };

  const isDetailPageAndSubmitted =
    isSubmitted && router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL;

  return (
    <>
      <form onSubmit={handleSubmit(handleOpenSubmitModal)}>
        <Styled.PersonalInformationSection>
          <Styled.SectionHeading>개인 정보</Styled.SectionHeading>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.userName, {
                required: '이름은 필수로 입력해야 해요!',
                value: applicant.name,
              })}
              maxLength={30}
              isError={!!errors.userName}
              errorMessage={errors.userName?.message}
              id={APPLY_FORM_KEYS.userName}
              placeholder="내용을 입력해주세요"
              label="이름"
              required
              disabled={isDetailPageAndSubmitted}
              $size="md"
              onBlur={() => {
                handleValidateForm(APPLY_FORM_KEYS.userName);
              }}
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.phone, {
                required: '전화번호는 필수로 입력해야 해요!',
                pattern: {
                  value: /^010-\d{3,4}-\d{4}$/,
                  message: '전화번호 형식이 올바르지 않습니다.',
                },
                value: applicant.phoneNumber,
              })}
              maxLength={13}
              type="tel"
              onChange={handleReplacePhoneNumber}
              id={APPLY_FORM_KEYS.phone}
              placeholder="010-1234-5678"
              label="전화번호"
              required
              disabled={isDetailPageAndSubmitted}
              isError={!!errors.phone}
              errorMessage={errors.phone?.message}
              $size="md"
              onBlur={() => {
                handleValidateForm(APPLY_FORM_KEYS.phone);
              }}
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              id={APPLY_FORM_KEYS.email}
              value={applicant.email}
              disabled
              label="이메일"
              $size="md"
              required
              type="email"
            />
            <Styled.ModifyEmailMessage>
              이메일 수정은 마이페이지에서 가능합니다.
            </Styled.ModifyEmailMessage>
          </Styled.PersonalInformationWrapper>
        </Styled.PersonalInformationSection>
        <Styled.QuestionListSection>
          <Styled.SectionHeading>질문 목록</Styled.SectionHeading>
          {questionsAndAnswers?.map(({ question, answer }) => {
            const uniqueQuestionId = `question-${question.questionId}`;
            return (
              <Styled.QuestionWrapper key={uniqueQuestionId}>
                {question.questionType === 'MULTI_LINE_TEXT' ? (
                  <LabeledTextArea
                    {...register(uniqueQuestionId, {
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '최대 글자수를 초과하였습니다.',
                      },
                      value: answer?.content,
                    })}
                    maxLength={question.maxContentLength || 10000}
                    label={question.content}
                    placeholder="내용을 입력해주세요."
                    required={question.required}
                    disabled={isDetailPageAndSubmitted}
                    id={uniqueQuestionId}
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidateForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentLength={question.maxContentLength}
                    description={question.description}
                  />
                ) : (
                  <LabeledInput
                    {...register(uniqueQuestionId, {
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '최대 글자수를 초과하였습니다.',
                      },
                      value: answer?.content,
                    })}
                    maxLength={question.maxContentLength || 10000}
                    id={uniqueQuestionId}
                    label={question.content}
                    required={question.required}
                    disabled={isDetailPageAndSubmitted}
                    $size="md"
                    placeholder="내용을 입력해주세요."
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidateForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentLength={question.maxContentLength}
                    description={question.description}
                  />
                )}
              </Styled.QuestionWrapper>
            );
          })}
        </Styled.QuestionListSection>
        <LabeledCheckbox
          {...register(APPLY_FORM_KEYS.isAgreePersonalInfo)}
          checked={isDetailPageAndSubmitted ? true : watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
          id={APPLY_FORM_KEYS.isAgreePersonalInfo}
          disabled={isDetailPageAndSubmitted}
        >
          {/* TODO:(하준) 개인정보 수집 및 이용 동의 페이지 링크로 수정 */}
          <a href="http://devfolio.world" target="_blank" rel="noreferrer">
            개인정보 수집 및 이용
          </a>
          에 동의합니다.
        </LabeledCheckbox>
        <Styled.ControlSection>
          {isSubmitted ? (
            router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL &&
            application.status === 'SUBMITTED' ? (
              <Styled.SubmittedCompletedButton type="button" disabled>
                제출 완료된 지원서 입니다
              </Styled.SubmittedCompletedButton>
            ) : (
              isSubmitted && (
                <Styled.AlreadySubmittedButton type="button" disabled>
                  이미 제출한 지원서가 있습니다
                </Styled.AlreadySubmittedButton>
              )
            )
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
          <Styled.BackToListLink href={HOME_PAGE}>목록으로 돌아가기</Styled.BackToListLink>
        </Styled.ControlSection>
      </form>
      {isOpenTempSaveSuccessAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="임시 저장 완료!"
          paragraph="기간 내에 지원서는 꼭! 잊지말고 제출해주세요!"
          handleApprovalButton={() =>
            handleCloseTempSaveAlertModal(setIsOpenTempSaveSuccessAlertModal)
          }
          setIsOpenModal={setIsOpenTempSaveSuccessAlertModal}
          deemClose={false}
          escClose={false}
        />
      )}
      {isOpenTempSaveFailedAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="임시 저장 실패"
          paragraph="다시 시도해주세요! 계속 임시 저장이 실패된다면  매쉬업 채널톡으로 문의해주세요!"
          handleApprovalButton={() =>
            handleCloseTempSaveAlertModal(setIsOpenTempSaveFailedAlertModal)
          }
          setIsOpenModal={setIsOpenTempSaveFailedAlertModal}
          deemClose={false}
          escClose={false}
        />
      )}
      {isOpenConfirmSubmittedModal && (
        <ConfirmModalDialog
          heading="지원서를 제출하시겠어요?"
          paragraph="제출하시면 더 이상 지원서를 수정하거나 삭제할 수 없으며, 중복 지원은 불가한 점 참고부탁드립니다. 지원 관련 문의는 recruit.mashup@gmail.com으로 해주시면 됩니다."
          approvalButtonMessage="제출하기"
          cancelButtonMessage="취소"
          handleApprovalButton={handleSubmitApplication}
          handleCancelButton={() => setIsOpenConfirmSubmittedModal(false)}
          setIsOpenModal={setIsOpenConfirmSubmittedModal}
          beforeRef={submitButtonRef}
        />
      )}
      {isOpenSuccessSubmittedModal && (
        <ConfirmModalDialog
          heading="지원서 제출 완료!"
          paragraph="귀한 시간내어 매쉬업 12기에 지원해주셔서 진심으로 감사드립니다! 3월 19일에 내 페이지에서 서류 결과 발표를 꼭 확인해주세요!"
          approvalButtonMessage="내 지원서 확인하기"
          cancelButtonMessage="홈으로"
          setIsOpenModal={setIsOpenSuccessSubmittedModal}
          handleCancelButton={() => router.push(HOME_PAGE)}
          handleApprovalButton={() => {
            router.push(`${MY_PAGE_APPLICATION_DETAIL}/${application.applicationId}`);
            setIsOpenSuccessSubmittedModal(false);
          }}
          escClose={false}
          deemClose={false}
        />
      )}
      {isOpenFailedSubmittedModal && (
        <AlertModalDialog
          heading="지원서 제출 실패"
          paragraph="다시시도해주세요 계속 실패하면 채널톡으로 문의해주세옹"
          beforeRef={submitButtonRef}
          setIsOpenModal={setIsOpenFailedSubmittedModal}
          handleApprovalButton={() => setIsOpenFailedSubmittedModal(false)}
          escClose={false}
          deemClose={false}
        />
      )}
      {isOpenBlockingConfirmModal && (
        <ConfirmModalDialog
          approvalButtonMessage="나가기"
          cancelButtonMessage="머물기"
          handleApprovalButton={handleMoveAfterBlocking}
          handleCancelButton={handleCloseBlockingConfirmModal}
          heading="지금..나가시게요..?"
          paragraph="저장 안된 내용은..날아갈 수 있다능.."
          setIsOpenModal={setIsOpenBlockingConfirmModal}
        />
      )}
      {isRequesting && <LoadingModal setIsOpenModal={setIsRequesting} />}
    </>
  );
};

export default ApplyForm;
