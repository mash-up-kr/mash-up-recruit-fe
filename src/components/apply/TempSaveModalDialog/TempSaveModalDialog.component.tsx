import { AlertModalDialog } from '@/components';
import { MY_PAGE_APPLY_STATUS } from '@/constants';
import { useRouter } from 'next/router';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

interface TempSaveModalDialogProps {
  isOpenTempSaveSuccessAlertModal: boolean;
  isOpenTempSaveFailedAlertModal: boolean;
  setIsOpenTempSaveSuccessAlertModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenTempSaveFailedAlertModal: Dispatch<SetStateAction<boolean>>;
  tempSaveButtonRef: MutableRefObject<HTMLButtonElement>;
}

const TempSaveModalDialog = ({
  isOpenTempSaveSuccessAlertModal,
  isOpenTempSaveFailedAlertModal,
  setIsOpenTempSaveSuccessAlertModal,
  setIsOpenTempSaveFailedAlertModal,
  tempSaveButtonRef,
}: TempSaveModalDialogProps) => {
  const router = useRouter();

  return (
    <>
      {isOpenTempSaveSuccessAlertModal && (
        <AlertModalDialog
          beforeRef={tempSaveButtonRef}
          heading="임시 저장 완료!"
          paragraph="기간 내에 지원서는 꼭! 잊지말고 제출해주세요!"
          handleApprovalButton={() => {
            router.push(MY_PAGE_APPLY_STATUS);
            setIsOpenTempSaveSuccessAlertModal(false);
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
          handleApprovalButton={() => setIsOpenTempSaveFailedAlertModal(false)}
          setIsOpenModal={setIsOpenTempSaveFailedAlertModal}
          deemClose={false}
          escClose={false}
          isError
        />
      )}
    </>
  );
};

export default TempSaveModalDialog;
