import { applicationApiService } from '@/api/services';
import { ApplyStatusLayout } from '@/components';
import { HOME_PAGE } from '@/constants';
import { Application } from '@/types/dto';
import {
  getRecruitingProgressStatusFromRecruitingPeriod,
  RecruitingProgressStatus,
} from '@/utils/date';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface ApplyStatusProps {
  applications: Application[];
  recruitingProgressStatus: RecruitingProgressStatus;
}

const ApplyStatus = ({ applications, recruitingProgressStatus }: ApplyStatusProps) => {
  return (
    <ApplyStatusLayout
      applications={applications}
      recruitingProgressStatus={recruitingProgressStatus}
    />
  );
};

export default ApplyStatus;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }

  try {
    const applicationsRes = await applicationApiService.getApplications({
      accessToken: session.accessToken,
    });

    const applications = applicationsRes.data;

    const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod(new Date());

    return { props: { applications, recruitingProgressStatus } };
  } catch (error) {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }
};
