import { MutableRefObject, useRef, useState } from 'react';
import { Modal, Navigation } from '@/components';
import ChevronDown from '@/assets/svg/chevron-down.svg';
import { platforms, PlatformKey } from '@/constants';
import * as Styled from './ModalNavigation.styled';

const platformsWithCommon = [
  {
    key: 'common',
    name: '공통질문',
  },
  ...platforms,
];

interface ModalNavigationProps {
  platformName: PlatformKey | 'common';
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

  const [{ name }] = platformsWithCommon.filter(({ key }) => key === platformName);

  return (
    <>
      <Styled.ModalOpenButton type="button" ref={buttonRef} onClick={handleOpenModal}>
        {name} {platformName === 'common' ? null : 'Team'}
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
