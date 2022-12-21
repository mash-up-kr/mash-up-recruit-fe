import { ConfirmModalDialog } from '@/components';
import { usePreventPageChange } from '@/hooks';
import { useState } from 'react';

interface BlockingConfirmModalDialogProps {
  isDirty: boolean;
  isOpenSuccessSubmittedModal: boolean;
  isTempSaved: boolean;
}

const BlockingConfirmModalDialog = ({
  isDirty,
  isOpenSuccessSubmittedModal,
  isTempSaved,
}: BlockingConfirmModalDialogProps) => {
  const [isOpenBlockingConfirmModal, setIsOpenBlockingConfirmModal] = useState(false);

  const { handleMoveAfterBlocking } = usePreventPageChange(setIsOpenBlockingConfirmModal, [
    isOpenBlockingConfirmModal,
    isOpenSuccessSubmittedModal,
    !isDirty,
    isTempSaved,
  ]);

  const handleCloseBlockingConfirmModal = () => {
    setIsOpenBlockingConfirmModal(false);
  };

  return isOpenBlockingConfirmModal ? (
    <ConfirmModalDialog
      approvalButtonMessage="나가기"
      cancelButtonMessage="머물기"
      handleApprovalButton={handleMoveAfterBlocking}
      handleCancelButton={handleCloseBlockingConfirmModal}
      heading="지금..나가시게요..?"
      paragraph="저장 안된 내용은..날아갈 수 있다능.."
      setIsOpenModal={setIsOpenBlockingConfirmModal}
    />
  ) : null;
};

export default BlockingConfirmModalDialog;
