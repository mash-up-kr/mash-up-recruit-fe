import { HomeLayout, LinkTo } from '@/components';
import { APPLY_FRONT_END_PAGE } from '@/constants';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
  const { data } = useSession();

  return (
    <HomeLayout>
      <LinkTo href={APPLY_FRONT_END_PAGE}>지원하기</LinkTo>
      {data ? (
        <button type="button" onClick={() => signOut()}>
          로그아웃
        </button>
      ) : (
        <button type="button" onClick={() => signIn('google')}>
          로그인하기
        </button>
      )}
    </HomeLayout>
  );
};

export default Home;
