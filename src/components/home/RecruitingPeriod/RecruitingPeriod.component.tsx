import { Lottie, ScreenReaderOnly } from '@/components';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import computerLottie from '@/assets/lottie/computer.json';
import PeriodArrow from '@/assets/svg/period-arrow.svg';
import fireLottie from '@/assets/lottie/fire.json';
import dayjs from 'dayjs';
import { RecruitSchedule } from '@/types/dto';
import * as Styled from './RecruitingPeriod.styled';

interface RecruitingPeriodProps {
  recruitSchedule: RecruitSchedule;
}

const RecruitingPeriod = ({ recruitSchedule }: RecruitingPeriodProps) => {
  const { RECRUITMENT_STARTED, RECRUITMENT_ENDED } = recruitSchedule;

  const DAYJS_RECRUITMENT_START_KST_DATE = dayjs(RECRUITMENT_STARTED);
  const DAYJS_RECRUITMENT_END_KST_DATE = dayjs(RECRUITMENT_ENDED);

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.StartDateContainer>
          <Styled.StartDate data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
            <span>Start Date</span>
            <ScreenReaderOnly>
              {DAYJS_RECRUITMENT_START_KST_DATE.format('YYYY년 M월 D일')}
            </ScreenReaderOnly>
            <time aria-hidden dateTime={DAYJS_RECRUITMENT_START_KST_DATE.format('YYYY-MM-DD')}>
              {DAYJS_RECRUITMENT_START_KST_DATE.format('MM.DD')}
            </time>
          </Styled.StartDate>
        </Styled.StartDateContainer>
        <Styled.EndDateContainer>
          <Styled.EndDate
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            <span>End Date</span>
            <ScreenReaderOnly>
              {DAYJS_RECRUITMENT_END_KST_DATE.format('YYYY년 M월 D일')}
            </ScreenReaderOnly>
            <time aria-hidden dateTime={DAYJS_RECRUITMENT_END_KST_DATE.format('YYYY-MM-DD')}>
              {DAYJS_RECRUITMENT_END_KST_DATE.format('MM.DD')}
            </time>
          </Styled.EndDate>
        </Styled.EndDateContainer>
        <Styled.PeriodBackgroundContainer data-aos="fade-up">
          <Styled.ComputerContainer data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
            <Lottie animationData={computerLottie} aria-hidden />
          </Styled.ComputerContainer>
          <Styled.PeriodArrowContainer
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
          >
            <PeriodArrow aria-hidden />
          </Styled.PeriodArrowContainer>
          <Styled.FireContainer
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
          >
            <Lottie aria-hidden animationData={fireLottie} />
          </Styled.FireContainer>
        </Styled.PeriodBackgroundContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default RecruitingPeriod;
