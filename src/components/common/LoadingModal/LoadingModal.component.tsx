import loadingSpinner from '@/assets/images/loading-spinner.gif';
import { Modal } from '@/components';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface LoadingModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const LoadingModal = ({ setIsOpenModal }: LoadingModalProps) => {
  return (
    <Modal setIsOpenModal={setIsOpenModal} deemClose={false} escClose={false}>
      <Image
        src={loadingSpinner.src}
        width={loadingSpinner.width / 3}
        height={loadingSpinner.height / 3}
        alt="로딩중"
      />
    </Modal>
  );
};

export default LoadingModal;
