import { applicationApiService } from '@/api/services';
import { ApplyLayout, ConfirmModalDialog } from '@/components';
import {
  PlatformHeadings,
  PLATFORM_HEADINGS,
} from '@/components/apply/ApplyForm/ApplyForm.component';
import { teamIds, teamNames, Teams } from '@/constants';
import { usePreventPageChange } from '@/hooks';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface ApplyProps {
  application: Application;
}

const Apply = ({ application }: ApplyProps) => {
  const router = useRouter();

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [afterBlockingPath, setAfterBlockingPath] = useState('/');

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const handleMoveAfterBlocking = () => {
    router.push(afterBlockingPath);
  };

  usePreventPageChange(isOpenConfirmModal, setIsOpenConfirmModal, setAfterBlockingPath);

  return (
    <>
      <ApplyLayout
        heading={PLATFORM_HEADINGS[router.asPath as keyof PlatformHeadings]}
        application={application}
      />
      {isOpenConfirmModal && (
        <ConfirmModalDialog
          approvalButtonMessage="나가기"
          cancelButtonMessage="머물기"
          handleApprovalButton={handleMoveAfterBlocking}
          handleCancelButton={handleCloseConfirmModal}
          heading="지금..나가시게요..?"
          paragraph="저장 안된 내용은..날아갈 수 있다능.."
          setIsOpenModal={setIsOpenConfirmModal}
        />
      )}
    </>
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

  const session = await getSession(context);

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

  if (!applications.find(({ team }) => team.teamId === teamIds[currentApplyPlatform])) {
    const application = await applicationApiService.createMyApplication({
      accessToken: session.accessToken,
      teamId: teamIds[currentApplyPlatform],
    });
    return {
      props: {
        application: application?.data,
      },
    };
  }

  return {
    props: {},
  };
};

export default Apply;
