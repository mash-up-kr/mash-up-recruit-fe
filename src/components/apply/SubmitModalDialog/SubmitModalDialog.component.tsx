import { AlertModalDialog, ConfirmModalDialog } from '@/components';
import { useSession } from 'next-auth/react';
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { applicationApiService } from '@/api/services';
import { useRouter } from 'next/router';
import { CURRENT_GENERATION, ERROR_CODE, HOME_PAGE, MY_PAGE_APPLY_STATUS } from '@/constants';
import axios from 'axios';
import { ApplyFormValues } from '../PersonalInformation/PersonalInformation.component';
import { QuestionAndAnswer } from '../QuestionAndAnswerList/QuestionAndAnswerList.component';

interface SubmitModalDialogProps {
  applyForm: UseFormReturn<ApplyFormValues, object>;
  isOpenConfirmSubmittedModal: boolean;
  isOpenSuccessSubmittedModal: boolean;
  questionsAndAnswers: QuestionAndAnswer[];
  setIsRequesting: Dispatch<SetStateAction<boolean>>;
  applicationId: number;
  setIsOpenConfirmSubmittedModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenSuccessSubmittedModal: Dispatch<SetStateAction<boolean>>;
  setIsTempSaved: Dispatch<SetStateAction<boolean>>;
  submitButtonRef: MutableRefObject<HTMLButtonElement>;
}

const SubmitModalDialog = ({
  isOpenConfirmSubmittedModal,
  isOpenSuccessSubmittedModal,
  applyForm,
  questionsAndAnswers,
  setIsRequesting,
  applicationId,
  setIsOpenConfirmSubmittedModal,
  setIsOpenSuccessSubmittedModal,
  setIsTempSaved,
  submitButtonRef,
}: SubmitModalDialogProps) => {
  const session = useSession();
  const router = useRouter();
  const { watch } = applyForm;

  const [isOpenFailedSubmittedModal, setIsOpenFailedSubmittedModal] = useState(false);
  const [isOpenCloseRecruitmentModal, setIsOpenCloseRecruitmentModal] = useState(false);

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
      if (axios.isAxiosError(error)) {
        setIsRequesting(false);
        setIsOpenConfirmSubmittedModal(false);
        if (error.response?.data.code === ERROR_CODE.APPLICATION_MODIFICATION_NOT_ALLOWED) {
          setIsOpenCloseRecruitmentModal(true);
        } else {
          setIsOpenFailedSubmittedModal(true);
        }
      }
    }
  };

  return (
    <>
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
          paragraph={`귀한 시간내어 매쉬업 ${CURRENT_GENERATION}기에 지원해주셔서 진심으로 감사드립니다! 1월 30일(월) 오후 9시에 내 페이지에서 서류 결과 발표를 꼭 확인해주세요!`}
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
      {isOpenCloseRecruitmentModal && (
        <AlertModalDialog
          heading="지원서 제출 기한 마감"
          paragraph="지원서 제출 기한이 마감 되었습니다. 제출 기한 마감 이후 별도 제출은 불가능한점 양해 부탁드립니다."
          beforeRef={submitButtonRef}
          setIsOpenModal={setIsOpenCloseRecruitmentModal}
          handleApprovalButton={() => setIsOpenCloseRecruitmentModal(false)}
          escClose={false}
          deemClose={false}
          isError
        />
      )}
    </>
  );
};

export default SubmitModalDialog;
