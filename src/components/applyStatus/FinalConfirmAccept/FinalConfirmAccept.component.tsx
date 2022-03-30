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
        <Styled.OtExplanationList>
          <li>
            OT 때 짧게 자기소개를 하는 시간이 있어요! 정말 간단한 자기소개라고 생각하시고 편하게
            참여해주시면 됩니다!
          </li>
        </Styled.OtExplanationList>
      </Styled.OtDetailSection>
      <Styled.ShootingStarIcon />
      <Styled.CocoazzangIcon />
    </Styled.FinalConfirmAccept>
  );
};

export default FinalConfirmAccept;
