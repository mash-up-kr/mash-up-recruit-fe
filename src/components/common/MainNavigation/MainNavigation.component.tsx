import { FAQ_PAGE, HOME_PAGE } from '@/constants';
import { LinkTo, LoginModalDialog } from '@/components';
import DivisionLine from '@/assets/svg/division-line.svg';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const loginButtonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const handleOpenLoginModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenLoginModal(true);
  };

  return (
    <>
      <Styled.Nav>
        <Styled.NavList>
          <li>
            <LinkTo href={HOME_PAGE}>모집 공고</LinkTo>
          </li>
          <li>
            <LinkTo href={FAQ_PAGE}>자주 묻는 질문</LinkTo>
            <DivisionLine />
          </li>
          <li>
            <Styled.LoginButton type="button" onClick={handleOpenLoginModal} ref={loginButtonRef}>
              로그인
            </Styled.LoginButton>
          </li>
        </Styled.NavList>
      </Styled.Nav>

      {isOpenLoginModal && (
        <LoginModalDialog
          device="desktop"
          type="login"
          setIsOpenModal={setIsOpenLoginModal}
          beforeRef={loginButtonRef}
        />
      )}
    </>
  );
};

export default MainNavigation;
