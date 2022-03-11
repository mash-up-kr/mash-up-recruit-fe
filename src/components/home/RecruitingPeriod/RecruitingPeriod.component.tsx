import PeriodBackground from '@/assets/svg/period-background.svg';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import * as Styled from './RecruitingPeriod.styled';

const RecruitingPeriod = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.StartDateContainer>
          <Styled.StartDate data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
            <span>Start Date</span>
            <time dateTime="2022-03-02">03.02</time>
          </Styled.StartDate>
        </Styled.StartDateContainer>
        <Styled.EndDateContainer>
          <Styled.EndDate
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            <span>End Date</span>
            <time dateTime="2022-03-15">03.15</time>
          </Styled.EndDate>
        </Styled.EndDateContainer>
        <Styled.PeriodBackgroundContainer data-aos="fade-up">
          <PeriodBackground />
        </Styled.PeriodBackgroundContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default RecruitingPeriod;
