import { FAQ_PAGE, HOME_PAGE, VIEWPORT_SIZE } from '@/constants';
import { LinkTo, SignInModalDialog, MyPageTab } from '@/components';
import DivisionLine from '@/assets/svg/division-line.svg';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import { useDetectViewPort, useWatchingIsScrollTop } from '@/hooks';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ChevronBottom12 from '@/assets/svg/chevron-bottom-12.svg';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const session = useSession();
  const { size } = useDetectViewPort();
  const isScrollTop = useWatchingIsScrollTop();
  const { asPath } = useRouter();

  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenMyPageTab, setIsOpenMyPageTab] = useState(false);

  const loginButtonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const handleOpenSignInModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenSignInModal(true);
  };

  const handleToggleMyPageTab: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenMyPageTab(!isOpenMyPageTab);
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
            {session.status === 'authenticated' ? (
              <>
                <Styled.MyPageButton
                  type="button"
                  isScrollTop={isScrollTop}
                  currentPage={asPath}
                  onClick={handleToggleMyPageTab}
                  isOpenMyPageTab={isOpenMyPageTab}
                >
                  <span>내 페이지</span>
                  <ChevronBottom12 />
                </Styled.MyPageButton>
                <MyPageTab isOpenMyPageTab={isOpenMyPageTab} />
              </>
            ) : (
              <Styled.SignInButton
                type="button"
                isScrollTop={isScrollTop}
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
          device="desktop"
          type="login"
          setIsOpenModal={setIsOpenSignInModal}
          beforeRef={loginButtonRef}
        />
      )}
    </>
  );
};

export default MainNavigation;
