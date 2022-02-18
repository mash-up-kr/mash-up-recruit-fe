import { FAQ_PAGE, HOME_PAGE, VIEWPORT_SIZE } from '@/constants';
import { LinkTo, LoginModalDialog } from '@/components';
import DivisionLine from '@/assets/svg/division-line.svg';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import { useDetectViewPort, useWatchingIsScrollTop } from '@/hooks';
import { useRouter } from 'next/router';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const { size } = useDetectViewPort();

  const isScrollTop = useWatchingIsScrollTop();

  const { asPath } = useRouter();

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const loginButtonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const handleOpenLoginModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenLoginModal(true);
  };

  return (
    <>
      <Styled.Nav>
        <Styled.NavList isScrollTop={isScrollTop} currentPage={asPath}>
          <li>
            <LinkTo href={HOME_PAGE}>모집 공고</LinkTo>
          </li>
          <li>
            <LinkTo href={FAQ_PAGE}>자주 묻는 질문</LinkTo>
            <DivisionLine width={size === VIEWPORT_SIZE.MOBILE ? '1' : '2'} />
          </li>
          <li>
            <Styled.LoginButton
              type="button"
              isScrollTop={isScrollTop}
              currentPage={asPath}
              onClick={handleOpenLoginModal}
              ref={loginButtonRef}
            >
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
