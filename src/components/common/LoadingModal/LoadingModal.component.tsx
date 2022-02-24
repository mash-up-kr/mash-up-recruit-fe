import { Modal } from '@/components';
import { Dispatch, SetStateAction } from 'react';
import Lottie from 'react-lottie';
import * as mashUpSpinnerLottie from '@/assets/lottie/mash-up-spinner.json';

interface LoadingModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const LoadingModal = ({ setIsOpenModal }: LoadingModalProps) => {
  const lottieOption = {
    animationData: mashUpSpinnerLottie,
  };

  return (
    <Modal setIsOpenModal={setIsOpenModal} deemClose={false} escClose={false}>
      <Lottie options={lottieOption} width={800} height={800} isClickToPauseDisabled />
    </Modal>
  );
};

export default LoadingModal;
