import { ApplyForm } from '@/components';
import { Application } from '@/types/dto';
import * as Styled from './ApplyLayout.styled';

interface ApplyLayoutProps {
  heading: string;
  application: Application;
}

const ApplyLayout = ({ heading, application }: ApplyLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
      <ApplyForm heading={heading} application={application} />
    </Styled.Layout>
  );
};

export default ApplyLayout;
