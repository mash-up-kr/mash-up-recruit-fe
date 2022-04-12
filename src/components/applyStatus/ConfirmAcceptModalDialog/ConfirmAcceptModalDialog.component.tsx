import { Modal } from '@/components';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Styled from './ConfirmAcceptModalDialog.styled';

export interface ConfirmAcceptFormValues {
  confirmInput: string;
}

interface ConfirmAcceptModalDialogProps {
  heading: string;
  paragraph: string;
  handleCancelButton: MouseEventHandler<HTMLButtonElement>;
  handleApprovalButton: SubmitHandler<ConfirmAcceptFormValues>;
  cancelButtonMessage: string;
  approvalButtonMessage: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef?: MutableRefObject<HTMLButtonElement>;
  escClose?: boolean;
  inputPlaceHolder: string;
}

const ConfirmAcceptModalDialog = ({
  heading,
  paragraph,
  handleCancelButton,
  handleApprovalButton,
  cancelButtonMessage,
  approvalButtonMessage,
  beforeRef,
  setIsOpenModal,
  escClose,
  inputPlaceHolder,
}: ConfirmAcceptModalDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmAcceptFormValues>();

  const CONFIRM_PLACE_HOLDER = 'confirmPlaceHolder';

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
            <Styled.HappyMinsoo />
            <Styled.Heading>{heading}</Styled.Heading>
            <Styled.Paragraph>{paragraph}</Styled.Paragraph>
            <Styled.PlaceHolderLabel htmlFor={CONFIRM_PLACE_HOLDER}>
              {inputPlaceHolder}
            </Styled.PlaceHolderLabel>
            <Styled.Input
              type="text"
              id={CONFIRM_PLACE_HOLDER}
              {...register('confirmInput', {
                validate: (inputValue) =>
                  inputValue === inputPlaceHolder || '초록색 문구와 똑같이 입력해주세요',
                required: {
                  value: true,
                  message: '초록색 문구와 똑같이 입력해주세요',
                },
              })}
              placeholder={inputPlaceHolder}
              autoComplete="off"
              isError={Boolean(errors.confirmInput)}
            />
            {errors.confirmInput && (
              <Styled.ErrorMessage>{errors.confirmInput.message}</Styled.ErrorMessage>
            )}
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

export default ConfirmAcceptModalDialog;
