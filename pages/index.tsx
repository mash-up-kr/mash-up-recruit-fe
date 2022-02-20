import { HomeLayout, LinkTo } from '@/components';
import { APPLY_FRONT_END_PAGE } from '@/constants';

const Home = () => {
  return (
    <HomeLayout>
      <LinkTo href={APPLY_FRONT_END_PAGE}>지원하기</LinkTo>
    </HomeLayout>
  );
};

export default Home;
