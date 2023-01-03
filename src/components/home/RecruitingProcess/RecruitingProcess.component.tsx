import { ScreenReaderOnly } from '@/components';
import { CURRENT_GENERATION } from '@/constants';
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
            <ScreenReaderOnly>2023년 1월 11일 수요일부터 2023년 1월 25일 수요일</ScreenReaderOnly>
            <Styled.Date aria-hidden>
              <time dateTime="2023-01-11">01.11(수)</time>&nbsp;~&nbsp;
              <time dateTime="2023-01-25">01.25(화)</time>
            </Styled.Date>
            <Styled.Note>23:59:59 마감</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>서류 결과 발표</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>2023년 1월 30일 월요일</ScreenReaderOnly>
              <time aria-hidden dateTime="2023-01-30">
                01.30(월)
              </time>
            </Styled.Date>
            <Styled.Note>오전 10시</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>온/오프라인 면접</Styled.SubHeading>
            <ScreenReaderOnly>2023년 2월 4일 토요일에서 2023년 2월 5일 일요일</ScreenReaderOnly>
            <Styled.Date aria-hidden>
              <time dateTime="2023-02-04">02.04(토)</time>&nbsp;~&nbsp;
              <time dateTime="2023-02-05">02.05(일)</time>
            </Styled.Date>
            <Styled.Note>추후 연락</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>최종 합격 발표</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>2023년 2월 7일 화요일</ScreenReaderOnly>
              <time aria-hidden dateTime="2023-02-07">
                02.07(화)
              </time>
            </Styled.Date>
            <Styled.Note>오후 7시</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>{CURRENT_GENERATION}기 OT</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>2023년 2월 11일 토요일</ScreenReaderOnly>
              <time aria-hidden dateTime="2023-02-11">
                02.11(토)
              </time>
            </Styled.Date>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingProcess;
