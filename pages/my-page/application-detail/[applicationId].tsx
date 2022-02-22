import { applicationApiService } from '@/api/services';
import { ApplicationDetailLayout } from '@/components';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface ApplicationDetailProps {
  application: Application;
  isSubmited: boolean;
}

const ApplicationDetail = ({ application, isSubmited }: ApplicationDetailProps) => {
  return <ApplicationDetailLayout application={application} isSubmited={isSubmited} />;
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

  const isSubmited = applications.some(({ status }) => status === 'SUBMITTED');

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
      isSubmited,
    },
  };
};

export default ApplicationDetail;
