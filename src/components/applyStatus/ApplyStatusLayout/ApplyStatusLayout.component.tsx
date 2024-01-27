import { StatusList, ApplyStatusDetail } from '@/components';
import { CURRENT_GENERATION } from '@/constants';
import { Application, RecruitSchedule } from '@/types/dto';
import * as Styled from './ApplyStatusLayout.styled';

interface ApplyStatusLayoutProps {
  applications: Application[];
  recruitSchedule: RecruitSchedule;
}

const ApplyStatusLayout = ({ applications, recruitSchedule }: ApplyStatusLayoutProps) => {
  const isSubmitted = applications.some(
    ({ status, generationResponse: { generationNumber } }) =>
      status === 'SUBMITTED' && generationNumber === CURRENT_GENERATION,
  );
  return (
    <Styled.Layout>
      {isSubmitted && (
        <ApplyStatusDetail applications={applications} recruitSchedule={recruitSchedule} />
      )}
      <StatusList applications={applications} />
    </Styled.Layout>
  );
};

export default ApplyStatusLayout;
