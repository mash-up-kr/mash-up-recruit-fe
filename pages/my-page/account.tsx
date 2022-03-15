import { applicantApiService } from '@/api/services';
import { AccountLayout } from '@/components';
import { ERROR_PAGE, HOME_PAGE } from '@/constants';
import { Applicant } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface AccountProps {
  userInfo: Applicant;
}

const Account = ({ userInfo }: AccountProps) => {
  return <AccountLayout userInfo={userInfo} />;
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }

  try {
    const applicantRes = await applicantApiService.getMyApplicantData({
      accessToken: session.accessToken,
    });

    const userInfo = applicantRes.data;

    return { props: { userInfo } };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: ERROR_PAGE,
      },
    };
  }
};
