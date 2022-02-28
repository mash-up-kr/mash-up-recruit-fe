import { applicationApiService } from '@/api/services';
import { ApplicationDetailLayout } from '@/components';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

interface ApplicationDetailProps {
  application: Application;
  isSubmitted: boolean;
}

const ApplicationDetail = ({ application, isSubmitted }: ApplicationDetailProps) => {
  return <ApplicationDetailLayout application={application} isSubmitted={isSubmitted} />;
};

export const getServerSideProps: GetServerSideProps<ApplicationDetailProps> = async (context) => {
  const session = await getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const applicationsRes = await applicationApiService.getApplications({
    accessToken: session?.accessToken,
  });

  // TODO:(하준) API 실패 응답시 띄워 줄 UI나 동작이 정의되면 변경
  if (applicationsRes.code !== 'SUCCESS')
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  const applications = applicationsRes.data;

  const isSubmitted = applications.some(({ status }) => status === 'SUBMITTED');

  const application = applications.find(
    ({ applicationId }) => applicationId === parseInt(context.params?.applicationId as string, 10),
  );

  if (!application) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      application,
      isSubmitted,
    },
  };
};

export default ApplicationDetail;
