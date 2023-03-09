import {
  HomeLayout,
  RecruitingDetailNavigation,
  RecruitingProcess,
  WelcomeHero,
  RecruitingOpenHero,
  RecruitingPeriod,
  RecruitingRemainder,
  NotRecruitmentPeriod,
} from '@/components';

import { useAOS } from '@/hooks';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import type { RecruitingProgressStatus } from '@/utils/date';
import { useEffect, useState } from 'react';

const Home = () => {
  useAOS();

  const [isOpenNotRecruitMentModal, setIsOpenNotRecruitmentModal] = useState(true);
  const [recruitingProgressStatus, setRecruitingProgressStatus] = useState<
    RecruitingProgressStatus | 'NOT_INITIALIZED'
  >('NOT_INITIALIZED');

  useEffect(() => {
    setRecruitingProgressStatus(getRecruitingProgressStatusFromRecruitingPeriod(new Date()));
  }, []);

  return (
    <>
      {recruitingProgressStatus === 'PREVIOUS' && <RecruitingRemainder />}
      {recruitingProgressStatus !== 'PREVIOUS' && (
        <HomeLayout visibility={recruitingProgressStatus !== 'NOT_INITIALIZED'}>
          <WelcomeHero />
          <RecruitingOpenHero />
          <RecruitingPeriod />
          <RecruitingProcess />
          <RecruitingDetailNavigation />
          {isOpenNotRecruitMentModal && (
            <NotRecruitmentPeriod setIsOpenModal={setIsOpenNotRecruitmentModal} />
          )}
        </HomeLayout>
      )}
    </>
  );
};

export default Home;
