import { applicationApiService } from '@/api/services';
import {
  HomeLayout,
  RecruitingDetailNavigation,
  RecruitingProcess,
  WelcomeHero,
  RecruitingOpenHero,
  RecruitingPeriod,
  RecruitingRemainder,
} from '@/components';
import { CURRENT_GENERATION } from '@/constants';

import { useAOS } from '@/hooks';
import { RecruitSchedule } from '@/types/dto';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import type { RecruitingProgressStatus } from '@/utils/date';
import { useEffect, useState } from 'react';

const Home = () => {
  useAOS();

  const [recruitSchedule, setRecruitSchedule] = useState<RecruitSchedule | null>(null);

  useEffect(() => {
    const fetchRecruitSchedule = async () => {
      const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
        generationNumber: CURRENT_GENERATION,
      });

      setRecruitSchedule(generateRecruitSchedule(recruitScheduleResponse));
    };

    fetchRecruitSchedule();
  }, []);

  const [recruitingProgressStatus, setRecruitingProgressStatus] = useState<
    RecruitingProgressStatus | 'NOT_INITIALIZED'
  >('NOT_INITIALIZED');

  useEffect(() => {
    setRecruitingProgressStatus(
      getRecruitingProgressStatusFromRecruitingPeriod({
        date: new Date(),
        recruitSchedule,
      }),
    );
  }, [recruitSchedule]);

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
        </HomeLayout>
      )}
    </>
  );
};

export default Home;
