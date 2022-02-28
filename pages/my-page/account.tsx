import { applicantApiService } from '@/api/services';
import { AccountLayout } from '@/components';
import { HOME_PAGE } from '@/constants';
import { Applicant } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

interface AccountProps {
  userInfo: Applicant;
}

const Account = ({ userInfo }: AccountProps) => {
  return <AccountLayout userInfo={userInfo} />;
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context, authOptions);
  if (!session) {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }

  const response = await applicantApiService.getMyApplicantData({
    accessToken: session.accessToken,
  });

  if (response.code !== 'SUCCESS') {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }

  const userInfo = response.data;

  return { props: { userInfo } };
};
