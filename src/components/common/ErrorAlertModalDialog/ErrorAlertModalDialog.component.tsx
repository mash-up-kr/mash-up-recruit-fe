import { AlertModalDialog } from '@/components';
import { Dispatch, SetStateAction } from 'react';

interface ErrorAlertModalDialogProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ErrorAlertModalDialog = ({ setIsOpenModal }: ErrorAlertModalDialogProps) => {
  const handleCloseErrorAlertModalDialog = () => setIsOpenModal(false);
  return (
    <AlertModalDialog
      heading="다시 시도해주세요!"
      paragraph="계속 오류가 발생한다면 매쉬업 채널톡으로 문의해주세요!"
      setIsOpenModal={setIsOpenModal}
      isError
      handleApprovalButton={handleCloseErrorAlertModalDialog}
    />
  );
};

export default ErrorAlertModalDialog;
