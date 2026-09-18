import dayjs from 'dayjs';
import { RecruitSchedule } from '@/types/dto';
import { isRecruitScheduleComplete } from '@/utils/date';
import * as Styled from './RecruitDate.styled';

interface RecruitDateProps {
  recruitSchedule: RecruitSchedule;
}

const RecruitDate = ({ recruitSchedule }: RecruitDateProps) => {
  if (!isRecruitScheduleComplete(recruitSchedule)) return null;

  const { RECRUITMENT_STARTED, RECRUITMENT_ENDED } = recruitSchedule;

  const DAYJS_RECRUITMENT_START_KST_DATE = dayjs(RECRUITMENT_STARTED);
  const DAYJS_RECRUITMENT_END_KST_DATE = dayjs(RECRUITMENT_ENDED);

  return (
    <Styled.Container>
      <time dateTime={DAYJS_RECRUITMENT_START_KST_DATE.format('YYYY-MM-DD')}>
        {DAYJS_RECRUITMENT_START_KST_DATE.format('MM.DD')}
      </time>
      &nbsp;~&nbsp;
      <time dateTime={DAYJS_RECRUITMENT_END_KST_DATE.format('YYYY-MM-DD')}>
        {DAYJS_RECRUITMENT_END_KST_DATE.format('MM.DD')}
      </time>
    </Styled.Container>
  );
};
export default RecruitDate;
