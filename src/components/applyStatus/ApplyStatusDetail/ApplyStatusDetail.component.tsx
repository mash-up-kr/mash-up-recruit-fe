import { ScreeningWait } from '@/components';
import { Application } from '@/types/dto';
import { RecruitingProgressStatus } from '@/utils/date';
import * as Styled from './ApplyStatusDetail.styled';

interface ApplyStatusDetailProps {
  applications: Application[];
  recruitingProgressStatus: RecruitingProgressStatus;
}

const ApplyStatusDetail = ({ applications, recruitingProgressStatus }: ApplyStatusDetailProps) => {
  const submittedApplication = applications.find(
    (application) => application.status === 'SUBMITTED',
  );

  if (!submittedApplication) return null;

  if (
    submittedApplication.result.status === 'SUBMITTED' &&
    recruitingProgressStatus === 'AFTER-SCREENING-ANNOUNCED'
  )
    return (
      <Styled.StatusDetail>
        <ScreeningWait />
      </Styled.StatusDetail>
    );

  return null;
};

export default ApplyStatusDetail;
