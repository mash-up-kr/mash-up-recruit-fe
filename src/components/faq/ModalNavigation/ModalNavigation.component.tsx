import { MutableRefObject, useRef, useState } from 'react';
import { Modal, Navigation } from '@/components';
import ChevronDown from '@/assets/svg/chevron-down.svg';
import { PlatformKey, platforms } from '@/components/faq/Navigation/Navigation.component';
import * as Styled from './ModalNavigation.styled';

interface ModalNavigationProps {
  platformName: PlatformKey;
}

const ModalNavigation = ({ platformName }: ModalNavigationProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const currentRouteName = platforms.find(({ key }) => key === platformName)?.name;

  return (
    <>
      <Styled.ModalOpenButton type="button" ref={buttonRef} onClick={handleOpenModal}>
        {currentRouteName}
        <ChevronDown aria-hidden />
      </Styled.ModalOpenButton>
      {isOpenModal && (
        <Modal beforeRef={buttonRef} setIsOpenModal={setIsOpenModal}>
          <Styled.NavigationContainer>
            <Navigation platformName={platformName} handleClickItem={handleCloseModal} />
          </Styled.NavigationContainer>
        </Modal>
      )}
    </>
  );
};
export default ModalNavigation;
