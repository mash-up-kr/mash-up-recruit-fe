import { Modal } from '@/components';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Styled from './ConfirmRejectModalDialog.styled';

export interface ConfirmRejectFormValues {
  confirmInput: string;
}

interface ConfirmRejectModalDialogProps {
  heading: string;
  paragraph: string;
  handleCancelButton: MouseEventHandler<HTMLButtonElement>;
  handleApprovalButton: SubmitHandler<ConfirmRejectFormValues>;
  cancelButtonMessage: string;
  approvalButtonMessage: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef?: MutableRefObject<HTMLButtonElement>;
  escClose?: boolean;
  inputPlaceholder: string;
}

const ConfirmRejectModalDialog = ({
  heading,
  paragraph,
  handleCancelButton,
  handleApprovalButton,
  cancelButtonMessage,
  approvalButtonMessage,
  beforeRef,
  setIsOpenModal,
  escClose,
  inputPlaceholder,
}: ConfirmRejectModalDialogProps) => {
  const { register, handleSubmit } = useForm<ConfirmRejectFormValues>();

  return (
    <Modal
      beforeRef={beforeRef}
      setIsOpenModal={setIsOpenModal}
      deemClose={false}
      escClose={escClose}
    >
      <Styled.Dialog>
        <Styled.Form onSubmit={handleSubmit(handleApprovalButton)}>
          <Styled.DialogInner>
            <Styled.SadMinsoo />
            <Styled.Heading>{heading}</Styled.Heading>
            <Styled.Paragraph>{paragraph}</Styled.Paragraph>
            <Styled.Input
              type="text"
              {...register('confirmInput')}
              placeholder={inputPlaceholder}
              autoComplete="off"
            />
          </Styled.DialogInner>
          <Styled.DialogFooter>
            <Styled.CancelButton type="button" onClick={handleCancelButton}>
              <div />
              {cancelButtonMessage}
            </Styled.CancelButton>
            <Styled.ApprovalButton type="submit">
              <div />
              {approvalButtonMessage}
            </Styled.ApprovalButton>
          </Styled.DialogFooter>
        </Styled.Form>
      </Styled.Dialog>
    </Modal>
  );
};

export default ConfirmRejectModalDialog;
