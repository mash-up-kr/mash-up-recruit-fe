import { FAQ_COMMON_PAGE, HOME_PAGE, VIEWPORT_SIZE } from '@/constants';
import { LinkTo, SignInModalDialog, MyPageTab } from '@/components';
import DivisionLine from '@/assets/svg/division-line.svg';
import { MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDetectOutsideClick, useDetectViewPort } from '@/hooks';
import Router, { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ChevronBottom12 from '@/assets/svg/chevron-bottom-12.svg';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const session = useSession();
  const { size } = useDetectViewPort();
  const { asPath } = useRouter();

  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenMyPageTab, setIsOpenMyPageTab] = useState(false);

  const loginButtonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const MyPageTabWrapper = useRef<HTMLDivElement>(null);

  const handleOpenSignInModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenSignInModal(true);
  };

  const handleToggleMyPageTab: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenMyPageTab(!isOpenMyPageTab);
  };

  const handleCloseTab = () => {
    setIsOpenMyPageTab(false);
  };

  useDetectOutsideClick(MyPageTabWrapper, handleCloseTab);

  useEffect(() => {
    Router.events.on('routeChangeStart', handleCloseTab);

    return () => {
      Router.events.off('routeChangeStart', handleCloseTab);
    };
  }, []);

  return (
    <>
      <Styled.Nav>
        <Styled.NavList currentPage={asPath}>
          <li>
            <LinkTo href={HOME_PAGE}>모집 공고</LinkTo>
          </li>
          <li>
            <LinkTo href={FAQ_COMMON_PAGE}>자주 묻는 질문</LinkTo>
            <DivisionLine width={size === VIEWPORT_SIZE.MOBILE ? '1' : '2'} />
          </li>
          <li>
            {session.status === 'authenticated' ? (
              <div ref={MyPageTabWrapper}>
                <Styled.MyPageButton
                  type="button"
                  currentPage={asPath}
                  onClick={handleToggleMyPageTab}
                  isOpenMyPageTab={isOpenMyPageTab}
                >
                  <span>내 페이지</span>
                  <ChevronBottom12 />
                </Styled.MyPageButton>
                <MyPageTab
                  isOpenMyPageTab={isOpenMyPageTab}
                  setIsOpenMyPageTab={setIsOpenMyPageTab}
                />
              </div>
            ) : (
              <Styled.SignInButton
                type="button"
                currentPage={asPath}
                onClick={handleOpenSignInModal}
                ref={loginButtonRef}
              >
                로그인
              </Styled.SignInButton>
            )}
          </li>
        </Styled.NavList>
      </Styled.Nav>

      {isOpenSignInModal && (
        <SignInModalDialog
          type="login"
          setIsOpenModal={setIsOpenSignInModal}
          beforeRef={loginButtonRef}
        />
      )}
    </>
  );
};

export default MainNavigation;
