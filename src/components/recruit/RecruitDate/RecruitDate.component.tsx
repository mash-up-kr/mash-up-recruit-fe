import { RECRUIT_DATE } from '@/constants';
import dayjs from 'dayjs';
import * as Styled from './RecruitDate.styled';

const RecruitDate = () => {
  const { RECRUITMENT_START_KST_DATE, RECRUITMENT_END_KST_DATE } = RECRUIT_DATE;

  const DAYJS_RECRUITMENT_START_KST_DATE = dayjs(RECRUITMENT_START_KST_DATE);
  const DAYJS_RECRUITMENT_END_KST_DATE = dayjs(RECRUITMENT_END_KST_DATE);

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
