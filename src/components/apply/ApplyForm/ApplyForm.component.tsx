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
          <Styled.SectionHeading>?????? ??????</Styled.SectionHeading>

          <Styled.PersonalInformationWrapper>
            <Controller
              name={APPLY_FORM_KEYS.userName}
              control={control}
              rules={{
                required: '????????? ????????? ???????????? ??????!',
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
                  placeholder="????????? ??????????????????"
                  label="??????"
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
                required: '??????????????? ????????? ???????????? ??????!',
                pattern: {
                  value: /^010-\d{3,4}-\d{4}$/,
                  message: '???????????? ????????? ???????????? ????????????.',
                },
                value: applicant.phoneNumber,
              })}
              maxLength={13}
              type="tel"
              onChange={handleReplacePhoneNumber}
              id={APPLY_FORM_KEYS.phone}
              placeholder="??????????????? ??????????????????"
              label="????????????"
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
              label="?????????"
              $size="md"
              required
              type="email"
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.birthdate, {
                required: '??????????????? ????????? ???????????? ??????!',
                value: applicant.birthdate,
                validate: (value) => isValidDate(value) || '???????????? ????????? ???????????? ????????????.',
              })}
              maxLength={10}
              type="text"
              onChange={handleReplaceLocalDate}
              id={APPLY_FORM_KEYS.birthdate}
              placeholder="??????????????? ?????????????????? ex) 2000-01-15"
              label="????????????"
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
                required: '??????????????? ????????? ???????????? ??????!',
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
                  placeholder="??????????????? ?????????????????? ex) ????????? ?????????"
                  label="????????????"
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
                required: '????????? ????????? ???????????? ??????!',
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
                  placeholder="????????? ?????????????????? ex) ??????, ??????, ?????????..."
                  label="??????"
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
          <Styled.SectionHeading>?????? ??????</Styled.SectionHeading>
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
                        message: '????????? ?????????????????? ???????????????!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '?????? ???????????? ?????????????????????.',
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
                        placeholder="????????? ??????????????????."
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
                        message: '????????? ?????????????????? ???????????????!',
                      },
                      maxLength: {
                        value: question.maxContentLength || 10000,
                        message: '?????? ???????????? ?????????????????????.',
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
                        placeholder="????????? ??????????????????."
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
            ???????????? ?????? ??? ??????
          </a>
          ??? ???????????????.
        </LabeledCheckbox>
        <Styled.ControlSection>
          {isSubmitted ? (
            router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL &&
            application.status === 'SUBMITTED' ? (
              <Styled.SubmittedCompletedButton type="button" disabled>
                ?????? ????????? ????????? ?????????
              </Styled.SubmittedCompletedButton>
            ) : (
              isSubmitted && (
                <Styled.AlreadySubmittedButton type="button" disabled>
                  ?????? ????????? ???????????? ????????????
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
                ??????????????????
              </Styled.TempSaveButton>
              <Styled.SubmitButton
                disabled={!watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
                ref={submitButtonRef}
              >
                ????????????
              </Styled.SubmitButton>
            </>
          )}
          <Styled.BackToListLink
            href={
              router.pathname === PATH_NAME.APPLY_PAGE
                ? `/recruit/${application.team.name.toLowerCase()}`
                : router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL
                ? MY_PAGE_APPLY_STATUS
                : HOME_PAGE
            }
          >
            <Styled.ChevronLeft />
            <span>???????????? ????????????</span>
          </Styled.BackToListLink>
        </Styled.ControlSection>
      </form>
      {isOpenTempSaveSuccessAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="?????? ?????? ??????!"
          paragraph="?????? ?????? ???????????? ???! ???????????? ??????????????????!"
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
          heading="?????? ?????? ??????"
          paragraph="?????? ??????????????????! ?????? ?????? ????????? ??????????????? ????????? ??????????????? ??????????????????!"
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
          heading="???????????? ??????????????????????"
          paragraph="??????????????? ??? ?????? ???????????? ??????????????? ????????? ??? ?????????, ?????? ????????? ????????? ??? ?????? ??????????????????. ?????? ?????? ????????? ??????????????? ???????????? ?????????."
          approvalButtonMessage="????????????"
          cancelButtonMessage="??????"
          handleApprovalButton={handleSubmitApplication}
          handleCancelButton={() => setIsOpenConfirmSubmittedModal(false)}
          setIsOpenModal={setIsOpenConfirmSubmittedModal}
          beforeRef={submitButtonRef}
        />
      )}
      {isOpenSuccessSubmittedModal && (
        <ConfirmModalDialog
          heading="????????? ?????? ??????!"
          paragraph="?????? ???????????? ????????? 12?????? ?????????????????? ???????????? ??????????????????! 4??? 3???(???) ?????? 10?????? ??? ??????????????? ?????? ?????? ????????? ??? ??????????????????!"
          approvalButtonMessage="??? ????????? ????????????"
          cancelButtonMessage="?????????"
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
          heading="????????? ?????? ??????"
          paragraph="?????? ??????????????????! ?????? ??????????????? ??????????????? ????????? ??????????????? ??????????????????!"
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
          approvalButtonMessage="?????????"
          cancelButtonMessage="?????????"
          handleApprovalButton={handleMoveAfterBlocking}
          handleCancelButton={handleCloseBlockingConfirmModal}
          heading="??????..???????????????..?"
          paragraph="?????? ?????? ?????????..????????? ??? ?????????.."
          setIsOpenModal={setIsOpenBlockingConfirmModal}
        />
      )}
      {isRequesting && <LoadingModal setIsOpenModal={setIsRequesting} />}
    </>
  );
};

export default ApplyForm;
