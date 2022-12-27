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

const Home = () => {
  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod(new Date());

  useAOS();

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
