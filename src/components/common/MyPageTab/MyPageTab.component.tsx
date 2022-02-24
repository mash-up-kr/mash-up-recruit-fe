import { signOut, useSession } from 'next-auth/react';
import {
  Dispatch,
  KeyboardEventHandler,
  MouseEventHandler,
  SetStateAction,
  useLayoutEffect,
  useRef,
} from 'react';
import ChevronRight7 from '@/assets/svg/chevron-right-7.svg';
import { MY_PAGE_ACCOUNT, MY_PAGE_APPLY_STATUS } from '@/constants';
import { useRouter } from 'next/router';
import * as Styled from './MyPageTab.styled';

interface MyPageTabProps {
  isOpenMyPageTab: boolean;
  setIsOpenMyPageTab: Dispatch<SetStateAction<boolean>>;
}

const MyPageTab = ({ isOpenMyPageTab, setIsOpenMyPageTab }: MyPageTabProps) => {
  const session = useSession();
  const myPageTabPanelRef = useRef<HTMLDivElement>(null);
  const myPageTabContentRef = useRef<HTMLDivElement>(null);

  const { asPath: currentPage } = useRouter();

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
  };

  const handleTabCloseTab: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) setIsOpenMyPageTab(false);
  };

  const handleShiftTabCloseTab: KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.key === 'Tab' && e.shiftKey) setIsOpenMyPageTab(false);
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
    <Styled.MyPageTabPanel ref={myPageTabPanelRef} aria-hidden={!isOpenMyPageTab}>
      <Styled.MyPageTabContent ref={myPageTabContentRef} currentPage={currentPage}>
        <Styled.UserName currentPage={currentPage}>{session?.data?.user?.name}님</Styled.UserName>
        <Styled.UserEmail currentPage={currentPage}>{session?.data?.user?.email}</Styled.UserEmail>

        <Styled.TabLink
          href={MY_PAGE_ACCOUNT}
          onKeyDown={handleShiftTabCloseTab}
          tabIndex={isOpenMyPageTab ? 0 : -1}
          currentPage={currentPage}
        >
          계정 관리
          <ChevronRight7 />
        </Styled.TabLink>
        <Styled.TabLink
          href={MY_PAGE_APPLY_STATUS}
          tabIndex={isOpenMyPageTab ? 0 : -1}
          currentPage={currentPage}
        >
          지원 내역
          <ChevronRight7 />
        </Styled.TabLink>
        <Styled.SignOutButton
          onClick={handleSignOut}
          onKeyDown={handleTabCloseTab}
          tabIndex={isOpenMyPageTab ? 0 : -1}
          currentPage={currentPage}
        >
          로그아웃
        </Styled.SignOutButton>
      </Styled.MyPageTabContent>
    </Styled.MyPageTabPanel>
  );
};

export default MyPageTab;
