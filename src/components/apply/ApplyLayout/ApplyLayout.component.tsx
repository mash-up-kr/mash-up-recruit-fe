import { ApplyForm } from '@/components';
import { Application } from '@/types/dto';
import { Dispatch, SetStateAction } from 'react';
import * as Styled from './ApplyLayout.styled';

interface ApplyLayoutProps {
  heading: string;
  application: Application;
  isOpenSuccessSubmitedModal: boolean;
  setIsOpenSuccessSubmitedModal: Dispatch<SetStateAction<boolean>>;
}

const ApplyLayout = ({
  heading,
  application,
  isOpenSuccessSubmitedModal,
  setIsOpenSuccessSubmitedModal,
}: ApplyLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
      <ApplyForm
        heading={heading}
        application={application}
        isOpenSuccessSubmitedModal={isOpenSuccessSubmitedModal}
        setIsOpenSuccessSubmitedModal={setIsOpenSuccessSubmitedModal}
      />
    </Styled.Layout>
  );
};

export default ApplyLayout;
