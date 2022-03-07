import {
  HomeLayout,
  RecruitingDetailNavigation,
  RecruitingProcess,
  WelcomeHero,
  RecruitingOpenHero,
  RecruitingPeriod,
} from '@/components';
import { useAOS } from '@/hooks';

const Home = () => {
  useAOS();

  return (
    <HomeLayout>
      <WelcomeHero />
      <RecruitingOpenHero />
      <RecruitingPeriod />
      <RecruitingProcess />
      <RecruitingDetailNavigation />
    </HomeLayout>
  );
};

export default Home;
