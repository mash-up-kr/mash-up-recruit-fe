import { Modal, SignInDialog, InAppSignInDialog } from '@/components';
import { detectBrowser } from '@/utils/userAgent';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface SignInModalProps {
  type: 'login' | 'apply';
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef: MutableRefObject<HTMLButtonElement>;
  callbackUrl?: string;
}

const SignInModal = ({ beforeRef, setIsOpenModal, type, callbackUrl }: SignInModalProps) => {
  const isInAppBrowser = detectBrowser('IN-APP');

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal beforeRef={beforeRef} setIsOpenModal={setIsOpenModal}>
      {isInAppBrowser ? (
        <InAppSignInDialog handleCloseDialog={handleCloseModal} />
      ) : (
        <SignInDialog type={type} handleCloseButton={handleCloseModal} callbackUrl={callbackUrl} />
      )}
    </Modal>
  );
};
export default SignInModal;
