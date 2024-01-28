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
import { RecruitScheduleArray } from '@/types/dto';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import type { RecruitingProgressStatus } from '@/utils/date';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

interface HomeProps {
  recruitScheduleArray: RecruitScheduleArray;
}

const Home = ({ recruitScheduleArray }: HomeProps) => {
  useAOS();

  const recruitSchedule = generateRecruitSchedule(recruitScheduleArray);

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
      {recruitingProgressStatus === 'PREVIOUS' && (
        <RecruitingRemainder recruitSchedule={recruitSchedule} />
      )}
      {recruitingProgressStatus !== 'PREVIOUS' && (
        <HomeLayout visibility={recruitingProgressStatus !== 'NOT_INITIALIZED'}>
          <WelcomeHero />
          <RecruitingOpenHero recruitSchedule={recruitSchedule} />
          <RecruitingPeriod recruitSchedule={recruitSchedule} />
          <RecruitingProcess recruitSchedule={recruitSchedule} />
          <RecruitingDetailNavigation />
        </HomeLayout>
      )}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
    generationNumber: CURRENT_GENERATION,
  });

  return {
    props: { recruitScheduleArray: recruitScheduleResponse },
  };
};
