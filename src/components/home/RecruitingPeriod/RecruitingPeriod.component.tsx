import { Lottie } from '@/components';
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
            <time dateTime="2022-03-16">03.16</time>
          </Styled.StartDate>
        </Styled.StartDateContainer>
        <Styled.EndDateContainer>
          <Styled.EndDate
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            <span>End Date</span>
            <time dateTime="2022-03-29">03.29</time>
          </Styled.EndDate>
        </Styled.EndDateContainer>
        <Styled.PeriodBackgroundContainer data-aos="fade-up">
          <Styled.ComputerContainer data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
            <Lottie animationData={computerLottie} />
          </Styled.ComputerContainer>
          <Styled.PeriodArrowContainer
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
          >
            <PeriodArrow />
          </Styled.PeriodArrowContainer>
          <Styled.FireContainer
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
          >
            <Lottie animationData={fireLottie} />
          </Styled.FireContainer>
        </Styled.PeriodBackgroundContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default RecruitingPeriod;
