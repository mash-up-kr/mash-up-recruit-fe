import { applicationApiService } from '@/api/services';
import { ConfirmModalDialog, ApplicationDetailLayout } from '@/components';
import { usePreventPageChange } from '@/hooks';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useState } from 'react';

interface ApplicationDetailProps {
  application: Application;
}

const ApplicationDetail = ({ application }: ApplicationDetailProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSuccessSubmitedModal, setIsOpenSuccessSubmitedModal] = useState(false);

  const { handleMoveAfterBlocking } = usePreventPageChange(setIsOpenConfirmModal, [
    isOpenConfirmModal,
    isOpenSuccessSubmitedModal,
  ]);

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <>
      <ApplicationDetailLayout
        application={application}
        isOpenSuccessSubmitedModal={isOpenSuccessSubmitedModal}
        setIsOpenSuccessSubmitedModal={setIsOpenSuccessSubmitedModal}
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
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const applicationRes = await applicationApiService.getApplicationDetail({
    accessToken: session.accessToken,
    applicationId: parseInt(context.params?.applicationId as string, 10),
  });

  // TODO:(하준) API 실패 응답시 띄워 줄 UI나 동작이 정의되면 변경
  if (applicationRes.code !== 'SUCCESS')
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  return {
    props: {
      application: applicationRes?.data,
    },
  };
};

export default ApplicationDetail;
