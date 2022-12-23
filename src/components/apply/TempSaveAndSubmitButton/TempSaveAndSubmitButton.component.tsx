import { applicationApiService } from '@/api/services';
import { useSession } from 'next-auth/react';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  ApplyFormValues,
  APPLY_FORM_KEYS,
} from '../PersonalInformation/PersonalInformation.component';
import { QuestionAndAnswer } from '../QuestionAndAnswerList/QuestionAndAnswerList.component';
import * as Styled from './TempSaveAndSubmitButton.styled';

interface TempSaveAndSubmitButtonRefs {
  tempSaveButtonRef: MutableRefObject<HTMLButtonElement>;
  submitButtonRef: MutableRefObject<HTMLButtonElement>;
}

interface TempSaveAndSubmitButtonProps {
  refs: TempSaveAndSubmitButtonRefs;
  applyForm: UseFormReturn<ApplyFormValues, object>;
  applicationId: number;
  questionsAndAnswers: QuestionAndAnswer[];
  setIsRequesting: Dispatch<SetStateAction<boolean>>;
  setIsOpenTempSaveSuccessAlertModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenTempSaveFailedAlertModal: Dispatch<SetStateAction<boolean>>;
  setIsTempSaved: Dispatch<SetStateAction<boolean>>;
}

const TempSaveAndSubmitButton = ({
  refs,
  applyForm,
  applicationId,
  questionsAndAnswers,
  setIsRequesting,
  setIsOpenTempSaveSuccessAlertModal,
  setIsOpenTempSaveFailedAlertModal,
  setIsTempSaved,
}: TempSaveAndSubmitButtonProps) => {
  const session = useSession();
  const { submitButtonRef, tempSaveButtonRef } = refs;
  const { setFocus, trigger, watch } = applyForm;

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
  return (
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
  );
};

export default TempSaveAndSubmitButton;
