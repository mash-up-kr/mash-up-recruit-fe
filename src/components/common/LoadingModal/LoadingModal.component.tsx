import { Modal } from '@/components';
import { Dispatch, SetStateAction } from 'react';
import mashUpSpinnerLottie from '@/assets/lottie/mash-up-spinner.json';
import { Lottie } from '@/components/common';

interface LoadingModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const LoadingModal = ({ setIsOpenModal }: LoadingModalProps) => {
  return (
    <Modal setIsOpenModal={setIsOpenModal} deemClose={false} escClose={false}>
      <Lottie animationData={mashUpSpinnerLottie} width={800} height={800} />
    </Modal>
  );
};

export default LoadingModal;
