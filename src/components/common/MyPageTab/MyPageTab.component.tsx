import { signOut, useSession } from 'next-auth/react';
import { MouseEventHandler, useLayoutEffect, useRef } from 'react';
import ChevronRight7 from '@/assets/svg/chevron-right-7.svg';
import * as Styled from './MyPageTab.styled';

interface MyPageTabProps {
  isOpenMyPageTab: boolean;
}

const MyPageTab = ({ isOpenMyPageTab }: MyPageTabProps) => {
  const session = useSession();
  const myPageTabPanelRef = useRef<HTMLDivElement>(null);
  const myPageTabContentRef = useRef<HTMLDivElement>(null);

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
  };

  useLayoutEffect(() => {
    const setTabPanelHeight = () => {
      if (!(myPageTabPanelRef.current && myPageTabContentRef.current)) return;

      if (session.status === 'authenticated') {
        if (isOpenMyPageTab) {
          myPageTabPanelRef.current.style.height = `${myPageTabContentRef.current.offsetHeight}px`;
        } else {
          myPageTabPanelRef.current.style.height = '0';
        }
      }
    };

    setTabPanelHeight();
  }, [isOpenMyPageTab, session.status]);

  return (
    <Styled.MyPageTabPanel ref={myPageTabPanelRef} aria-hidden={isOpenMyPageTab}>
      <Styled.MyPageTabContent ref={myPageTabContentRef}>
        <Styled.UserName>{session?.data?.user?.name}님</Styled.UserName>
        <Styled.UserEmail>{session?.data?.user?.email}asfasdfa</Styled.UserEmail>

        <Styled.TabContentButton type="button" tabIndex={isOpenMyPageTab ? 0 : -1}>
          계정 관리
          <ChevronRight7 />
        </Styled.TabContentButton>
        <Styled.TabContentButton type="button" tabIndex={isOpenMyPageTab ? 0 : -1}>
          지원 내역
          <ChevronRight7 />
        </Styled.TabContentButton>
        <Styled.SignOutButton onClick={handleSignOut} tabIndex={isOpenMyPageTab ? 0 : -1}>
          로그아웃
        </Styled.SignOutButton>
      </Styled.MyPageTabContent>
    </Styled.MyPageTabPanel>
  );
};

export default MyPageTab;
