import {
  HomeLayout,
  RecruitingDetailNavigation,
  RecruitingProcess,
  WelcomeHero,
  RecruitingOpenHero,
  RecruitingPeriod,
  RecruitingRemainder,
} from '@/components';

import { useAOS } from '@/hooks';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import type { RecruitingProgressStatus } from '@/utils/date';
import { useEffect, useState } from 'react';

const Home = () => {
  useAOS();

  const [recruitingProgressStatus, setRecruitingProgressStatus] =
    useState<RecruitingProgressStatus>('INVALID');

  useEffect(() => {
    setRecruitingProgressStatus(getRecruitingProgressStatusFromRecruitingPeriod(new Date()));
  }, []);

  return (
    <>
      {recruitingProgressStatus === 'PREVIOUS' && <RecruitingRemainder />}
      {recruitingProgressStatus !== 'PREVIOUS' && (
        <HomeLayout>
          <WelcomeHero />
          <RecruitingOpenHero />
          <RecruitingPeriod />
          <RecruitingProcess />
          <RecruitingDetailNavigation />
        </HomeLayout>
      )}
    </>
  );
};

export default Home;
