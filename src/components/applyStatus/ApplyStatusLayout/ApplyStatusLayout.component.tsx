import { StatusList, ApplyStatusDetail } from '@/components';
import { Application } from '@/types/dto';
import { RecruitingProgressStatus } from '@/utils/date';
import * as Styled from './ApplyStatusLayout.styled';

interface ApplyStatusLayoutProps {
  applications: Application[];
  recruitingProgressStatus: RecruitingProgressStatus;
}

const ApplyStatusLayout = ({ applications, recruitingProgressStatus }: ApplyStatusLayoutProps) => {
  const isSubmitted = applications.some(({ status }) => status === 'SUBMITTED');
  return (
    <Styled.Layout>
      {isSubmitted && (
        <ApplyStatusDetail
          applications={applications}
          recruitingProgressStatus={recruitingProgressStatus}
        />
      )}
      <StatusList applications={applications} recruitingProgressStatus={recruitingProgressStatus} />
    </Styled.Layout>
  );
};

export default ApplyStatusLayout;
