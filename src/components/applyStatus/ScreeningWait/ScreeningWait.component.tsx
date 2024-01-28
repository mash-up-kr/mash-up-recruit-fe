import { StatusDetailBackground } from '@/components';
import { RecruitSchedule } from '@/types/dto';
import dayjs from 'dayjs';
import { DAYS } from '@/constants';
import * as Styled from './ScreeningWait.styled';

interface ScreeningWaitProps {
  recruitSchedule: RecruitSchedule;
}

const ScreeningWait = ({ recruitSchedule }: ScreeningWaitProps) => {
  const { SCREENING_RESULT_ANNOUNCED } = recruitSchedule;

  const screeningResultAnnouncedDayjs = dayjs(SCREENING_RESULT_ANNOUNCED);
  const screeningResultAnnounced = dayjs(recruitSchedule?.SCREENING_RESULT_ANNOUNCED).format(
    `M월 D일(${DAYS[screeningResultAnnouncedDayjs.day()]}) H시`,
  );
  return (
    <StatusDetailBackground imageType="working" contentSize="s">
      <Styled.ScreeningWait>
        <Styled.StatusMessage>
          {'Mash-Up Staff는 열심히 서류 검토 중.. \n조금만 기다려주세요!'}
        </Styled.StatusMessage>
        <Styled.StatusDescription>
          {`Mash-Up Staff가 꼼꼼히 서류를 검토하고 있습니다. ${screeningResultAnnounced}에 서류 결과 발표를 꼭 확인해주세요!`}
        </Styled.StatusDescription>
      </Styled.ScreeningWait>
    </StatusDetailBackground>
  );
};

export default ScreeningWait;
