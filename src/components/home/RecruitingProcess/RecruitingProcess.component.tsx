import * as Styled from './RecruitingProcess.styled';

const RecruitingProcess = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Heading data-aos="fade-up" data-aos-duration="600">
          Recruiting Process
        </Styled.Heading>
        <Styled.List data-aos="fade-up" data-aos-duration="800">
          <Styled.ListItem>
            <Styled.SubHeading>서류 접수</Styled.SubHeading>
            <Styled.Date>
              <time dateTime="2022-03-16">03.16(수)</time>&nbsp;~&nbsp;
              <time dateTime="2022-03-29">03.29(화)</time>
            </Styled.Date>
            <Styled.Note>23:59:59 마감</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>서류 결과 발표</Styled.SubHeading>
            <Styled.Date>
              <time dateTime="2022-04-03">04.03(일)</time>
            </Styled.Date>
            <Styled.Note>오전 10시</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>온/오프라인 면접</Styled.SubHeading>
            <Styled.Date>
              <time dateTime="2022-04-09">04.09(토)</time>&nbsp;~&nbsp;
              <time dateTime="2022-04-10">04.10(일)</time>
            </Styled.Date>
            <Styled.Note>추후 연락</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>최종 합격 발표</Styled.SubHeading>
            <Styled.Date>
              <time dateTime="2022-04-12">04.12(화)</time>
            </Styled.Date>
            <Styled.Note>오후 7시</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>12기 OT</Styled.SubHeading>
            <Styled.Date>
              <time dateTime="2022-04-16">04.16(토)</time>
            </Styled.Date>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingProcess;
