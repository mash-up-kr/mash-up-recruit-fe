import { StatusList } from '@/components';
import { Application } from '@/types/dto';
import * as Styled from './ApplyStatusLayout.styled';

interface ApplyStatusLayoutProps {
  applications: Application[];
}

const ApplyStatusLayout = ({ applications }: ApplyStatusLayoutProps) => {
  return (
    <Styled.Layout>
      <StatusList applications={applications} />
    </Styled.Layout>
  );
};

export default ApplyStatusLayout;
