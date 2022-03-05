import PeriodBackgroundDesktop from '@/assets/svg/period-background-desktop.svg';
import * as Styled from './RecruitingPeriodDesktop.styled';

const RecruitingPeriodDesktop = () => {
  return (
    <Styled.Container>
      <Styled.StartDate>
        <span>Start Date</span>
        <time dateTime="2022-03-02">03.02</time>
      </Styled.StartDate>

      <Styled.EndDate>
        <span>End Date</span>
        <time dateTime="2022-03-15">03.15</time>
      </Styled.EndDate>

      <PeriodBackgroundDesktop />
    </Styled.Container>
  );
};
export default RecruitingPeriodDesktop;
