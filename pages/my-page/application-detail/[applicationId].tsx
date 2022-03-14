import { applicationApiService } from '@/api/services';
import { ApplicationDetailLayout } from '@/components';
import { ERROR_PAGE, HOME_PAGE } from '@/constants';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface ApplicationDetailProps {
  application: Application;
  isSubmitted: boolean;
}

const ApplicationDetail = ({ application, isSubmitted }: ApplicationDetailProps) => {
  return <ApplicationDetailLayout application={application} isSubmitted={isSubmitted} />;
};

export const getServerSideProps: GetServerSideProps<ApplicationDetailProps> = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  try {
    const applicationsRes = await applicationApiService.getApplications({
      accessToken: session?.accessToken,
    });

    const applications = applicationsRes.data;

    const isSubmitted = applications.some(({ status }) => status === 'SUBMITTED');

    const application = applications.find(
      ({ applicationId }) =>
        applicationId === parseInt(context.params?.applicationId as string, 10),
    );

    if (!application) {
      return {
        redirect: {
          permanent: false,
          destination: HOME_PAGE,
        },
      };
    }

    return {
      props: {
        application,
        isSubmitted,
      },
    };
  } catch (error) {
    return {
      redirect: { destination: ERROR_PAGE, permanent: false },
    };
  }
};

export default ApplicationDetail;
