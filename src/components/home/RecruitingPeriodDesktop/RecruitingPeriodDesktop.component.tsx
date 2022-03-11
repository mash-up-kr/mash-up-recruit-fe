import PeriodBackgroundDesktop from '@/assets/svg/period-background-desktop.svg';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import * as Styled from './RecruitingPeriodDesktop.styled';

const RecruitingPeriodDesktop = () => {
  return (
    <Styled.Container>
      <Styled.StartDate data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
        <span>Start Date</span>
        <time dateTime="2022-03-02">03.02</time>
      </Styled.StartDate>
      <Styled.EndDate
        data-aos="fade-up"
        data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
      >
        <span>End Date</span>
        <time dateTime="2022-03-15">03.15</time>
      </Styled.EndDate>
      <Styled.PeriodBackgroundDesktopContainer data-aos="fade-up">
        <PeriodBackgroundDesktop />
      </Styled.PeriodBackgroundDesktopContainer>
    </Styled.Container>
  );
};
export default RecruitingPeriodDesktop;
