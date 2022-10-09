import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import { Lottie, ScreenReaderOnly } from '@/components';
import computerLottie from '@/assets/lottie/computer.json';
import PeriodArrow from '@/assets/svg/period-arrow.svg';
import fireLottie from '@/assets/lottie/fire.json';
import * as Styled from './RecruitingPeriodDesktop.styled';

const RecruitingPeriodDesktop = () => {
  return (
    <Styled.Container>
      <Styled.StartDate data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
        <span>Start Date</span>
        <ScreenReaderOnly>2022년 3월 16일</ScreenReaderOnly>
        <time aria-hidden dateTime="2022-03-16">
          03.16
        </time>
      </Styled.StartDate>
      <Styled.EndDate
        data-aos="fade-up"
        data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
      >
        <span>End Date</span>
        <ScreenReaderOnly>2022년 3월 29일</ScreenReaderOnly>
        <time aria-hidden dateTime="2022-03-29">
          03.29
        </time>
      </Styled.EndDate>
      <Styled.PeriodBackgroundDesktopContainer>
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
          <Lottie animationData={fireLottie} aria-hidden />
        </Styled.FireContainer>
      </Styled.PeriodBackgroundDesktopContainer>
    </Styled.Container>
  );
};
export default RecruitingPeriodDesktop;
