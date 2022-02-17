import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  if (data) {
    return (
      <>
        <div>로그인되었습니다.</div>
        <button type="button" onClick={() => signOut()}>
          로그아웃
        </button>
      </>
    );
  }

  return (
    <button type="button" onClick={() => signIn('google')}>
      로그인
    </button>
  );
};

export default Home;
