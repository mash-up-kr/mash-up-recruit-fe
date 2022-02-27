import { Modal } from '@/components';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction, useEffect } from 'react';
import * as Styled from './AlertModalDialog.styled';

export interface AlertModalDialogProps {
  heading: string;
  paragraph: string;
  handleApprovalButton: MouseEventHandler<HTMLButtonElement>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef?: MutableRefObject<HTMLButtonElement>;
  deemClose?: boolean;
  escClose?: boolean;
  enterClose?: boolean;
  isError?: boolean;
}

const AlertModalDialog = ({
  heading,
  paragraph,
  handleApprovalButton,
  beforeRef,
  setIsOpenModal,
  deemClose,
  escClose,
  enterClose = true,
  isError = false,
}: AlertModalDialogProps) => {
  const handleCloseModalWithEnterHandler = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    if (enterClose) window.addEventListener('keyup', handleCloseModalWithEnterHandler);

    return () => {
      if (enterClose) window.removeEventListener('keyup', handleCloseModalWithEnterHandler);
    };
  });
  return (
    <Modal
      beforeRef={beforeRef}
      setIsOpenModal={setIsOpenModal}
      deemClose={deemClose}
      escClose={escClose}
    >
      <Styled.Dialog>
        <Styled.DialogInner>
          <Styled.Heading isError={isError}>{heading}</Styled.Heading>
          <Styled.Paragraph>{paragraph}</Styled.Paragraph>
        </Styled.DialogInner>
        <Styled.DialogFooter>
          <Styled.ApprovalButton type="button" onClick={handleApprovalButton}>
            <div />
            확인
          </Styled.ApprovalButton>
        </Styled.DialogFooter>
      </Styled.Dialog>
    </Modal>
  );
};

export default AlertModalDialog;
