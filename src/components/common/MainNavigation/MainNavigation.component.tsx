import { FAQ_COMMON_PAGE, HOME_PAGE, RECRUIT_DETAILS_ID } from '@/constants';
import { LinkTo, SignInModalDialog, MyPageTab, Skeleton } from '@/components';
import { MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDetectOutsideClick } from '@/hooks';
import Router, { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ChevronBottom12 from '@/assets/svg/chevron-bottom-12.svg';
import { colors } from '@/styles';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const session = useSession();
  const { pathname: currentPage } = useRouter();

  const isSessionLoading = session.status === 'loading';
  const skeletonColor = currentPage === HOME_PAGE ? 'rgba(255, 255, 255, 0.08)' : colors.gray20;

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
        <Styled.NavList currentPage={currentPage} isSessionLoading={isSessionLoading}>
          <li>
            <Skeleton color={skeletonColor} width="10rem" isLoading={isSessionLoading}>
              <LinkTo href={`${HOME_PAGE}#${RECRUIT_DETAILS_ID}`}>모집 공고</LinkTo>
            </Skeleton>
          </li>
          <li>
            <Skeleton
              color={skeletonColor}
              width="10rem"
              height="2.7rem"
              isLoading={isSessionLoading}
            >
              <LinkTo href={FAQ_COMMON_PAGE}>자주 묻는 질문</LinkTo>
            </Skeleton>
          </li>
          <li>
            <Skeleton color={skeletonColor} width="10rem" isLoading={isSessionLoading}>
              {session.status === 'authenticated' ? (
                <div ref={MyPageTabWrapper}>
                  <Styled.MyPageButton
                    type="button"
                    currentPage={currentPage}
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
                  currentPage={currentPage}
                  onClick={handleOpenSignInModal}
                  ref={loginButtonRef}
                >
                  로그인
                </Styled.SignInButton>
              )}
            </Skeleton>
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
