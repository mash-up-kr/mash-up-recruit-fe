import {
  HomeLayout,
  RecruitingDetailNavigation,
  RecruitingProcess,
  WelcomeHero,
  RecruitingOpenHero,
  RecruitingPeriod,
  RecruitingRemainder,
} from '@/components';
import { CURRENT_GENERATION, RECRUIT_SCHEDULE_REVALIDATE_SECONDS } from '@/constants';

import { useAOS } from '@/hooks';
import { RecruitScheduleArray } from '@/types/dto';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
  isRecruitScheduleComplete,
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
  const hasRecruitSchedule = isRecruitScheduleComplete(recruitSchedule);

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
          {hasRecruitSchedule && (
            <>
              <RecruitingOpenHero recruitSchedule={recruitSchedule} />
              <RecruitingPeriod recruitSchedule={recruitSchedule} />
              <RecruitingProcess recruitSchedule={recruitSchedule} />
            </>
          )}
          <RecruitingDetailNavigation />

          {/* {isOpenNotRecruitMentModal && (
            <NotRecruitmentPeriod setIsOpenModal={setIsOpenNotRecruitmentModal} />
          )} */}
        </HomeLayout>
      )}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recruitScheduleResponse = await fetch(
    `${process.env.BASE_URL}/api/applications/schedule/${CURRENT_GENERATION}`,
  );

  // revalidate가 없으면 빌드 시점에 일정 조회가 실패했을 때 그 빈 값이 재배포 전까지 고정된다.
  if (!recruitScheduleResponse.ok) {
    return { props: { recruitScheduleArray: [] }, revalidate: RECRUIT_SCHEDULE_REVALIDATE_SECONDS };
  }

  const { data: recruitScheduleArray }: { data: RecruitScheduleArray } =
    await recruitScheduleResponse.json();

  return {
    props: { recruitScheduleArray },
    revalidate: RECRUIT_SCHEDULE_REVALIDATE_SECONDS,
  };
};
