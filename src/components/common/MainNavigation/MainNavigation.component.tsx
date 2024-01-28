import { CURRENT_GENERATION, FAQ_COMMON_PAGE, HOME_PAGE, RECRUIT_DETAILS_ID } from '@/constants';
import { LinkTo, SignInModal, MyPageTab } from '@/components';
import { MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDetectOutsideClick } from '@/hooks';
import Router, { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ChevronBottom12 from '@/assets/svg/chevron-bottom-12.svg';
import { colors } from '@/styles';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import { RecruitSchedule } from '@/types/dto';
import { applicationApiService } from '@/api/services';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  const session = useSession();
  const { pathname: currentPage } = useRouter();

  const [recruitSchedule, setRecruitSchedule] = useState<RecruitSchedule | null>(null);

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });

  useEffect(() => {
    const fetchRecruitSchedule = async () => {
      const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
        generationNumber: CURRENT_GENERATION,
      });

      setRecruitSchedule(generateRecruitSchedule(recruitScheduleResponse));
    };

    fetchRecruitSchedule();
  }, []);

  const isSessionLoading = session.status === 'loading';

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

  if (recruitSchedule === null) {
    return null;
  }

  return (
    <>
      {recruitingProgressStatus === 'PREVIOUS' && null}
      {recruitingProgressStatus !== 'PREVIOUS' && (
        <>
          <Styled.Nav>
            <Styled.NavList currentPage={currentPage} isSessionLoading={isSessionLoading}>
              <li>
                <Styled.ListItemSkeleton
                  color={currentPage === HOME_PAGE ? 'rgba(255, 255, 255, 0.08)' : colors.gray20}
                  isLoading={isSessionLoading}
                >
                  <LinkTo href={`${HOME_PAGE}#${RECRUIT_DETAILS_ID}`}>모집 공고</LinkTo>
                </Styled.ListItemSkeleton>
              </li>
              <li>
                <Styled.ListItemSkeleton
                  color={currentPage === HOME_PAGE ? 'rgba(255, 255, 255, 0.08)' : colors.gray20}
                  isLoading={isSessionLoading}
                >
                  <LinkTo href={FAQ_COMMON_PAGE}>자주 묻는 질문</LinkTo>
                </Styled.ListItemSkeleton>
              </li>
              <li>
                <Styled.ListItemSkeleton
                  color={currentPage === HOME_PAGE ? 'rgba(255, 255, 255, 0.08)' : colors.gray20}
                  isLoading={isSessionLoading}
                >
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
                </Styled.ListItemSkeleton>
              </li>
            </Styled.NavList>
          </Styled.Nav>

          {isOpenSignInModal && (
            <SignInModal
              type="login"
              setIsOpenModal={setIsOpenSignInModal}
              beforeRef={loginButtonRef}
            />
          )}
        </>
      )}
    </>
  );
};

export default MainNavigation;
