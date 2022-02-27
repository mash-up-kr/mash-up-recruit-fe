import { HomeLayout, RecruitingDetailNavigation, RecruitingProcess } from '@/components';
import { useAOS } from '@/hooks';

const Home = () => {
  useAOS();

  return (
    <HomeLayout>
      <RecruitingProcess />
      <RecruitingDetailNavigation />
    </HomeLayout>
  );
};

export default Home;
