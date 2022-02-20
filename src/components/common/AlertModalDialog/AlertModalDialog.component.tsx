import { Modal } from '@/components';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from 'react';
import * as Styled from './AlertModalDialog.styled';

export interface AlertModalDialogProps {
  heading: string;
  paragraph: string;
  handleApprovalButton: MouseEventHandler<HTMLButtonElement>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef: MutableRefObject<HTMLButtonElement>;
  deemClose?: boolean;
  escClose?: boolean;
}

const AlertModalDialog = ({
  heading,
  paragraph,
  handleApprovalButton,
  beforeRef,
  setIsOpenModal,
  deemClose,
  escClose,
}: AlertModalDialogProps) => {
  return (
    <Modal
      beforeRef={beforeRef}
      setIsOpenModal={setIsOpenModal}
      deemClose={deemClose}
      escClose={escClose}
    >
      <Styled.Dialog>
        <Styled.DialogInner>
          <Styled.Heading>{heading}</Styled.Heading>
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
