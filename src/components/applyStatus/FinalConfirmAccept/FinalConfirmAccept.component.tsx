import { TEAM_NICK_NAME } from '@/constants';
import { Application } from '@/types/dto';
import * as Styled from './FinalConfirmAccept.styled';

interface FinalConfirmAcceptProps {
  application: Application;
}

const FinalConfirmAccept = ({ application }: FinalConfirmAcceptProps) => {
  const { applicant, team } = application;
  return (
    <Styled.FinalConfirmAccept>
      <Styled.NoticeSection>
        <Styled.NoticeMessage>
          {applicant.name}님 환영해요! {'\n'}Mash-Up 12기에서 멋-진 활약 기대합니다!
        </Styled.NoticeMessage>
        <Styled.NoticeDetail>
          안녕하세요 {applicant.name}님! Mash-Up 12기 {TEAM_NICK_NAME[team.name]}과 함께하게 되어
          너무 기뻐요! 12기 Rookie를 맞이할 준비하고 있을게요! 함께하게 되어 너무 기뻐요!! OT때
          만나요!!
        </Styled.NoticeDetail>
      </Styled.NoticeSection>
      <Styled.OtDetailSection>
        <Styled.OtDetailHeading>Mash-Up OT일시</Styled.OtDetailHeading>
        <Styled.OtDetailContent>4월 16일(토) 오후 2시 ~ 5시 [ZOOM]</Styled.OtDetailContent>
        <Styled.OtDetailHeading>준비물</Styled.OtDetailHeading>
        <Styled.OtDetailContent>노트북 또는 데스크탑, 그리고 열.정</Styled.OtDetailContent>
        <Styled.OtDetailHeading>모집 프로세스 만족도 조사 설문 링크</Styled.OtDetailHeading>
        <Styled.OtDetailContent>
          <Styled.SatisfactionSurveyLink
            href="https://forms.gle/36cdamKfsDFwqLUg7"
            target="_blank"
            rel="noreferrer"
          >
            https://forms.gle/36cdamKfsDFwqLUg7
          </Styled.SatisfactionSurveyLink>
        </Styled.OtDetailContent>
        <Styled.OtExplanationList>
          <li>
            OT 때 짧게 자기소개를 하는 시간이 있어요! 정말 간단한 자기소개라고 생각하시고 편하게
            참여해주시면 됩니다!
          </li>
          <li>
            모집 프로세스 만족도 설문 작성은 선택사항이며, 지원자님의 소중한 답변을 통해 더 나은
            프로세스를 만들어 성장하는 Mash-Up이 되겠습니다.
          </li>
        </Styled.OtExplanationList>
      </Styled.OtDetailSection>
      <Styled.ShootingStarIcon />
      <Styled.CocoazzangIcon />
    </Styled.FinalConfirmAccept>
  );
};

export default FinalConfirmAccept;
