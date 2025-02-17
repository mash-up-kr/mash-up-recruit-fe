import { CURRENT_GENERATION, DAYS, TEAM_NICK_NAME, SEMINAR_RUNNING_HOUR } from '@/constants';
import { Application, RecruitSchedule } from '@/types/dto';
import { StatusDetailBackground } from '@/components';
import dayjs from 'dayjs';
import * as Styled from './FinalConfirmAccept.styled';

interface FinalConfirmAcceptProps {
  application: Application;
  recruitSchedule: RecruitSchedule;
}

const FinalConfirmAccept = ({ application, recruitSchedule }: FinalConfirmAcceptProps) => {
  const { applicant, team } = application;

  const { AFTER_FIRST_SEMINAR_JOIN } = recruitSchedule;

  const afterFirstSeminalJoinDayjs = dayjs(AFTER_FIRST_SEMINAR_JOIN);

  const afterFirstSeminalJoinDate = afterFirstSeminalJoinDayjs.format(
    `M월 D일(${DAYS[afterFirstSeminalJoinDayjs.day()]}) H시 ~ ${
      afterFirstSeminalJoinDayjs.hour() + SEMINAR_RUNNING_HOUR
    }시`,
  );

  const groupChatInviteDayjs = afterFirstSeminalJoinDayjs.date(
    afterFirstSeminalJoinDayjs.date() - 2,
  );

  const groupChatInviteDate = groupChatInviteDayjs.format(
    `M월 D일 ${DAYS[groupChatInviteDayjs.day()]}요일`,
  );
  return (
    <StatusDetailBackground imageType="win">
      <Styled.FinalConfirmAccept>
        <Styled.NoticeSection>
          <Styled.NoticeMessage>
            {`${applicant.name}님 환영해요!\nMash-Up ${CURRENT_GENERATION}기에서 멋-진 활약 기대합니다!`}
          </Styled.NoticeMessage>
          <Styled.NoticeDetail>
            {`안녕하세요 ${applicant.name}님! Mash-Up ${CURRENT_GENERATION}기 ${
              TEAM_NICK_NAME[team.name]
            }과 함께하게 되어 너무 기뻐요! ${groupChatInviteDate} 오후 중으로 Mash-Up ${CURRENT_GENERATION}기 단톡방에 초대해드리겠습니다. 앞으로 잘 부탁드립니다!`}
          </Styled.NoticeDetail>
        </Styled.NoticeSection>
        <Styled.OtDetailSection>
          <Styled.OtDetailHeading>Mash-Up OT일시</Styled.OtDetailHeading>
          <Styled.OtDetailContent>{`${afterFirstSeminalJoinDate}`}</Styled.OtDetailContent>
          <Styled.OtDetailHeading>준비물</Styled.OtDetailHeading>
          <Styled.OtDetailContent>노트북(선택), 그리고 열.정</Styled.OtDetailContent>
          <Styled.OtDetailHeading>모집 프로세스 만족도 조사 설문 링크</Styled.OtDetailHeading>
          <Styled.OtDetailContent>
            <Styled.SatisfactionSurveyLink
              href="https://forms.gle/bfpbkhrZckeg5Sim8"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/bfpbkhrZckeg5Sim8
            </Styled.SatisfactionSurveyLink>
          </Styled.OtDetailContent>
          <Styled.OtExplanationList>
            <li>
              모집 프로세스 만족도 설문 작성은 선택사항이며, 지원자님의 소중한 답변을 통해 더 나은
              프로세스를 만들어 성장하는 Mash-Up이 되겠습니다.
            </li>
          </Styled.OtExplanationList>
        </Styled.OtDetailSection>
      </Styled.FinalConfirmAccept>
    </StatusDetailBackground>
  );
};

export default FinalConfirmAccept;
