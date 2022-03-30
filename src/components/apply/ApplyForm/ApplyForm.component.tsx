import { applicationApiService } from '@/api/services';
import {
  AlertModalDialog,
  ConfirmModalDialog,
  LabeledCheckbox,
  LabeledInput,
  LabeledTextArea,
  LoadingModal,
} from '@/components';
import { HOME_PAGE, MY_PAGE_APPLY_STATUS, PATH_NAME } from '@/constants';
import { usePreventPageChange } from '@/hooks';
import { ValueOf } from '@/types';
import { Application } from '@/types/dto';
import { isValidDate } from '@/utils/validDateString';
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
import { Controller, FieldValues, useForm } from 'react-hook-form';
import unescape from 'lodash-es/unescape';
import * as Styled from './ApplyForm.styled';

interface ApplyFormProps {
  application: Application;
  isSubmitted: boolean;
}

interface ApplyFormValues extends FieldValues {
  userName: string;
  email: string;
  phone: string;
  birthdate: string;
  residence: string;
  department: string;
  isAgreePersonalInfo: boolean;
}

const APPLY_FORM_KEYS = {
  userName: 'userName',
  email: 'email',
  phone: 'phone',
  birthdate: 'birthdate',
  residence: 'residence',
  department: 'department',
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
    control,
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

  const handleReplaceLocalDate: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const onlyNumberReg = /[^0-9]/g;

    if (onlyNumberReg.exec(currentTarget.value)) {
      setValue(APPLY_FORM_KEYS.birthdate, currentTarget.value.replace(onlyNumberReg, ''));
    }

    const restNumber = currentTarget.value.slice(4);
    const localDateArr = [
      currentTarget.value.slice(0, 4),
      restNumber.slice(0, 2),
      restNumber.slice(2),
    ];

    const replacedLocalDate = localDateArr.filter((isEmptyStr) => isEmptyStr).join('-');

    setValue(APPLY_FORM_KEYS.birthdate, replacedLocalDate);
  };

  const handleValidateForm = (formKey: ValueOf<ApplyFormValues>) => {
    trigger(formKey);
  };

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

  const handleSubmitApplication = async () => {
    if (session.status === 'unauthenticated') return;

    const { userName, phone, isAgreePersonalInfo, birthdate, department, residence } = watch();

    const applicationSubmitRequest = {
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
      setIsOpenConfirmSubmittedModal(false);
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
            <Controller
              name={APPLY_FORM_KEYS.userName}
              control={control}
              rules={{
                required: '이름은 필수로 입력해야 해요!',
                maxLength: 24,
              }}
              defaultValue={unescape(applicant.name)}
              render={({ field }) => (
                <LabeledInput
                  {...field}
                  onChange={({ target }) => {
                    if (target.value.length > 24) return;
                    field.onChange(target.value);
                  }}
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
              )}
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
              placeholder="전화번호를 입력해주세요"
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
              value={unescape(applicant.email)}
              disabled
              label="이메일"
              $size="md"
              required
              type="email"
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.birthdate, {
                required: '생년월일은 필수로 입력해야 해요!',
                value: applicant.birthdate,
                validate: (value) => isValidDate(value) || '생년월일 형식이 올바르지 않습니다.',
              })}
              maxLength={10}
              type="text"
              onChange={handleReplaceLocalDate}
              id={APPLY_FORM_KEYS.birthdate}
              placeholder="생년월일을 입력해주세요 ex) 2000-01-15"
              label="생년월일"
              required
              disabled={isDetailPageAndSubmitted}
              isError={!!errors.birthdate}
              errorMessage={errors.birthdate?.message}
              $size="md"
              onBlur={() => {
                handleValidateForm(APPLY_FORM_KEYS.birthdate);
              }}
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <Controller
              name={APPLY_FORM_KEYS.residence}
              control={control}
              rules={{
                required: '거주지역은 필수로 입력해야 해요!',
                maxLength: 30,
              }}
              defaultValue={unescape(applicant.residence)}
              render={({ field }) => (
                <LabeledInput
                  {...field}
                  onChange={({ target }) => {
                    if (target.value.length > 30) return;
                    field.onChange(target.value);
                  }}
                  isError={!!errors.residence}
                  errorMessage={errors.residence?.message}
                  id={APPLY_FORM_KEYS.residence}
                  placeholder="거주지역을 입력해주세요 ex) 서울시 강남구"
                  label="거주지역"
                  required
                  disabled={isDetailPageAndSubmitted}
                  $size="md"
                  onBlur={() => {
                    handleValidateForm(APPLY_FORM_KEYS.residence);
                  }}
                />
              )}
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <Controller
              name={APPLY_FORM_KEYS.department}
              control={control}
              rules={{
                required: '소속은 필수로 입력해야 해요!',
                maxLength: 50,
              }}
              defaultValue={unescape(applicant.department)}
              render={({ field }) => (
                <LabeledInput
                  {...field}
                  onChange={({ target }) => {
                    if (target.value.length > 50) return;
                    field.onChange(target.value);
                  }}
                  isError={!!errors.department}
                  errorMessage={errors.department?.message}
                  id={APPLY_FORM_KEYS.department}
                  placeholder="소속을 입력해주세요 ex) 회사, 학교, 취준생..."
                  label="소속"
                  required
                  disabled={isDetailPageAndSubmitted}
                  $size="md"
                  onBlur={() => {
                    handleValidateForm(APPLY_FORM_KEYS.department);
                  }}
                />
              )}
            />
          </Styled.PersonalInformationWrapper>
        </Styled.PersonalInformationSection>
        <Styled.QuestionListSection>
          <Styled.SectionHeading>질문 목록</Styled.SectionHeading>
          {questionsAndAnswers?.map(({ question, answer }, index) => {
            const uniqueQuestionId = `question-${question.questionId}`;
            return (
              <Styled.QuestionWrapper key={uniqueQuestionId}>
                {question.questionType === 'MULTI_LINE_TEXT' ? (
                  <Controller
                    name={uniqueQuestionId}
                    control={control}
                    rules={{
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '최대 글자수를 초과하였습니다.',
                      },
                    }}
                    defaultValue={unescape(answer?.content)}
                    render={({ field }) => (
                      <LabeledTextArea
                        {...field}
                        onChange={({ target }) => {
                          const { maxContentLength } = question;
                          if (!maxContentLength && target.value.length > 10000) return;

                          if (maxContentLength && maxContentLength < target.value.length) return;

                          field.onChange(target.value);
                        }}
                        label={`${index + 1}. ${question.content}`}
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
                    )}
                  />
                ) : (
                  <Controller
                    name={uniqueQuestionId}
                    control={control}
                    rules={{
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '최대 글자수를 초과하였습니다.',
                      },
                    }}
                    defaultValue={unescape(answer?.content)}
                    render={({ field }) => (
                      <LabeledInput
                        {...field}
                        onChange={({ target }) => {
                          const { maxContentLength } = question;
                          if (!maxContentLength && target.value.length > 10000) return;

                          if (maxContentLength && maxContentLength < target.value.length) return;

                          field.onChange(target.value);
                        }}
                        id={uniqueQuestionId}
                        label={`${index + 1}. ${question.content}`}
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
          <a
            href="https://snow-chestnut-45b.notion.site/Mash-Up-Recruit-62a5f6dabcb34e61ba8f26c4fb3a21f0"
            target="_blank"
            rel="noreferrer"
          >
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
          <Styled.BackToListLink href={`/recruit/${application.team.name.toLowerCase()}`}>
            <Styled.ChevronLeft />
            <span>목록으로 돌아가기</span>
          </Styled.BackToListLink>
        </Styled.ControlSection>
      </form>
      {isOpenTempSaveSuccessAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="임시 저장 완료!"
          paragraph="기간 내에 지원서는 꼭! 잊지말고 제출해주세요!"
          handleApprovalButton={() => {
            router.push(MY_PAGE_APPLY_STATUS);
            handleCloseTempSaveAlertModal(setIsOpenTempSaveSuccessAlertModal);
          }}
          setIsOpenModal={setIsOpenTempSaveSuccessAlertModal}
          deemClose={false}
          escClose={false}
          enterClose={false}
        />
      )}
      {isOpenTempSaveFailedAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="임시 저장 실패"
          paragraph="다시 시도해주세요! 계속 임시 저장이 실패된다면 매쉬업 채널톡으로 문의해주세요!"
          handleApprovalButton={() =>
            handleCloseTempSaveAlertModal(setIsOpenTempSaveFailedAlertModal)
          }
          setIsOpenModal={setIsOpenTempSaveFailedAlertModal}
          deemClose={false}
          escClose={false}
          isError
        />
      )}
      {isOpenConfirmSubmittedModal && (
        <ConfirmModalDialog
          heading="지원서를 제출하시겠어요?"
          paragraph="제출하시면 더 이상 지원서를 수정하거나 삭제할 수 없으며, 중복 지원은 불가한 점 참고 부탁드립니다. 지원 관련 문의는 채널톡으로 해주시면 됩니다."
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
          paragraph="귀한 시간내어 매쉬업 12기에 지원해주셔서 진심으로 감사드립니다! 4월 2일(토) 오전 10시에 내 페이지에서 서류 결과 발표를 꼭 확인해주세요!"
          approvalButtonMessage="내 지원서 확인하기"
          cancelButtonMessage="홈으로"
          setIsOpenModal={setIsOpenSuccessSubmittedModal}
          handleCancelButton={() => router.push(HOME_PAGE)}
          handleApprovalButton={() => {
            router.push(MY_PAGE_APPLY_STATUS);
            setIsTempSaved(true);
            setIsOpenSuccessSubmittedModal(false);
          }}
          escClose={false}
          deemClose={false}
        />
      )}
      {isOpenFailedSubmittedModal && (
        <AlertModalDialog
          heading="지원서 제출 실패"
          paragraph="다시 시도해주세요! 계속 제출하기가 실패된다면 매쉬업 채널톡으로 문의해주세요!"
          beforeRef={submitButtonRef}
          setIsOpenModal={setIsOpenFailedSubmittedModal}
          handleApprovalButton={() => setIsOpenFailedSubmittedModal(false)}
          escClose={false}
          deemClose={false}
          isError
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
