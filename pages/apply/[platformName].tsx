import { applicationApiService } from '@/api/services';
import { ApplyLayout } from '@/components';
import {
  PlatformHeadings,
  PLATFORM_HEADINGS,
  PLATFORM_ROLE,
} from '@/components/apply/ApplyLayout/ApplyLayout.component';
import {
  CURRENT_GENERATION,
  ERROR_PAGE,
  HOME_PAGE,
  NOT_FOUND_PAGE,
  teamIds,
  teamNames,
  Teams,
} from '@/constants';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';

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
  try {
    const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
      generationNumber: CURRENT_GENERATION,
    });

    const recruitSchedule = generateRecruitSchedule(recruitScheduleResponse);

    const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
      date: new Date(),
      recruitSchedule,
    });

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

    const applications = (
      await applicationApiService.getApplications({
        accessToken: session?.accessToken,
      })
    ).data;

    const isSubmitted = applications.some(
      ({ status, generationResponse: { generationNumber } }) =>
        status === 'SUBMITTED' && generationNumber === CURRENT_GENERATION,
    );

    const currentApplication = applications.find(
      ({ team, generationResponse: { generationNumber } }) =>
        team.teamId === teamIds[CURRENT_GENERATION][currentApplyPlatform] &&
        generationNumber === CURRENT_GENERATION,
    );

    if (!currentApplication) {
      const application = await applicationApiService.createMyApplication({
        accessToken: session.accessToken,
        teamId: teamIds[CURRENT_GENERATION][currentApplyPlatform],
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
