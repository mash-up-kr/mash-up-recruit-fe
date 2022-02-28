import { applicationApiService } from '@/api/services';
import { ApplyLayout } from '@/components';
import {
  PlatformHeadings,
  PLATFORM_HEADINGS,
  PLATFORM_ROLE,
} from '@/components/apply/ApplyLayout/ApplyLayout.component';
import { teamIds, teamNames, Teams } from '@/constants';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { useRouter } from 'next/router';
import { authOptions } from 'pages/api/auth/[...nextauth]';

interface ApplyProps {
  application: Application;
  isSubmitted: boolean;
}

const Apply = ({ application, isSubmitted }: ApplyProps) => {
  const router = useRouter();

  return (
    <ApplyLayout
      heading={PLATFORM_HEADINGS[router.asPath as keyof PlatformHeadings]}
      role={PLATFORM_ROLE[router.asPath as keyof PlatformHeadings]}
      application={application}
      isSubmitted={isSubmitted}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentApplyPlatform = teamNames[context.params?.platformName as Teams];

  if (!currentApplyPlatform) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const session = await getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const applications = (
    await applicationApiService.getApplications({
      accessToken: session?.accessToken,
    })
  ).data;

  const isSubmitted = applications.some(({ status }) => status === 'SUBMITTED');

  const currentApplication = applications.find(
    ({ team }) => team.teamId === teamIds[currentApplyPlatform],
  );

  if (!currentApplication) {
    const application = await applicationApiService.createMyApplication({
      accessToken: session.accessToken,
      teamId: teamIds[currentApplyPlatform],
    });
    return {
      props: {
        application: application?.data,
        isSubmitted,
      },
    };
  }

  const application = await applicationApiService.getApplicationDetail({
    accessToken: session.accessToken,
    applicationId: currentApplication.applicationId,
  });
  return {
    props: {
      application: application?.data,
      isSubmitted,
    },
  };
};

export default Apply;
