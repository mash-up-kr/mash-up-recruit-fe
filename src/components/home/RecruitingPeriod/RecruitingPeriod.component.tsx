import { Lottie, ScreenReaderOnly } from '@/components';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import computerLottie from '@/assets/lottie/computer.json';
import PeriodArrow from '@/assets/svg/period-arrow.svg';
import fireLottie from '@/assets/lottie/fire.json';
import * as Styled from './RecruitingPeriod.styled';

const RecruitingPeriod = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.StartDateContainer>
          <Styled.StartDate data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
            <span>Start Date</span>
            <ScreenReaderOnly>2023년 1월 11일</ScreenReaderOnly>
            <time aria-hidden dateTime="2023-01-11">
              01.11
            </time>
          </Styled.StartDate>
        </Styled.StartDateContainer>
        <Styled.EndDateContainer>
          <Styled.EndDate
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            <span>End Date</span>
            <ScreenReaderOnly>2023년 1월 25일</ScreenReaderOnly>
            <time aria-hidden dateTime="2023-01-25">
              01.25
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
