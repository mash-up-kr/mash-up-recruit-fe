import { applicationApiService } from '@/api/services';
import { ApplyLayout } from '@/components';
import {
  PlatformHeadings,
  PLATFORM_HEADINGS,
  PLATFORM_ROLE,
} from '@/components/apply/ApplyLayout/ApplyLayout.component';
import { ERROR_PAGE, HOME_PAGE, NOT_FOUND_PAGE, teamIds, teamNames, Teams } from '@/constants';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';

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
  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod(new Date());

  if (recruitingProgressStatus !== 'IN-RECRUITING') {
    return {
      redirect: {
        permanent: false,
        destination: HOME_PAGE,
      },
    };
  }

  const currentApplyPlatform = teamNames[context.params?.platformName as Teams];

  if (!currentApplyPlatform) {
    return {
      redirect: {
        permanent: false,
        destination: NOT_FOUND_PAGE,
      },
    };
  }

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: HOME_PAGE,
      },
    };
  }

  try {
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
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: ERROR_PAGE,
      },
    };
  }
};

export default Apply;
