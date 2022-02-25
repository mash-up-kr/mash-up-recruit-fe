import * as Styled from './RecruitingProcess.styled';

const RecruitingProcess = () => {
  return (
    <Styled.Container>
      <Styled.Heading data-aos="fade-up" data-aos-duration="600">
        Recruiting Process
      </Styled.Heading>
      <Styled.List data-aos="fade-up" data-aos-duration="800">
        <Styled.ListItem>
          <Styled.SubHeading>서류 접수</Styled.SubHeading>
          <Styled.Date>
            <time dateTime="2022-03-02">03.02(수)</time>&nbsp;~&nbsp;
            <time dateTime="2022-03-15">03.15(화)</time>
          </Styled.Date>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SubHeading>서류 결과 발표</Styled.SubHeading>
          <Styled.Date>
            <time dateTime="2022-03-19">03.19(토)</time>
          </Styled.Date>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SubHeading>온라인 화상 면접</Styled.SubHeading>
          <Styled.Date>
            <time dateTime="2022-03-26">03.26(토)</time>&nbsp;~&nbsp;
            <time dateTime="2022-03-27">03.27(일)</time>
          </Styled.Date>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SubHeading>최종 합격 발표</Styled.SubHeading>
          <Styled.Date>
            <time dateTime="2022-03-29">03.29(화)</time>
          </Styled.Date>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SubHeading>12기 합류</Styled.SubHeading>
          <Styled.Date>
            <time dateTime="2022-04-02">04.02(토)</time>
          </Styled.Date>
        </Styled.ListItem>
      </Styled.List>
    </Styled.Container>
  );
};
export default RecruitingProcess;
