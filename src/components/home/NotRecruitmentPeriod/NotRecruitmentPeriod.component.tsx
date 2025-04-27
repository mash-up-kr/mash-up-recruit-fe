import { Modal } from '@/components';
import mashong from '@/assets/images/mashong-coffee-3x-min.png';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { mashongCoffeeBase64 } from '@/assets/base64';
import { CURRENT_GENERATION } from '@/constants';
import * as Styled from './NotRecruitmentPeriod.styled';

interface NotRecruitmentPeriodProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const NotRecruitmentPeriod = ({ setIsOpenModal }: NotRecruitmentPeriodProps) => {
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal deemClose={false} setIsOpenModal={setIsOpenModal}>
      <Styled.Dialog>
        <Styled.Notify>지금은 모집 기간이 아니에요!</Styled.Notify>
        <Styled.Paragraph>
          다음 기수 모집 시작 일정에 대해{'\n'}아직은 정해진게 없어요 :)
        </Styled.Paragraph>
        <Styled.GoToOfficialPage href="https://mash-up.kr/">
          공식 홈페이지 바로가기
        </Styled.GoToOfficialPage>
        <Styled.CloseButton onClick={handleCloseModal}>지난 모집 훑어보기</Styled.CloseButton>
        <Styled.MashongWrapper>
          <Image
            src={mashong.src}
            alt=""
            layout="fill"
            placeholder="blur"
            blurDataURL={mashongCoffeeBase64}
            priority
          />
          <Styled.SpeechBubble>
            <Styled.Speech>현재 {CURRENT_GENERATION}기가 활발히 활동 중이에요</Styled.Speech>
            <Styled.SpeechDotBig />
            <Styled.SpeechDotSmall />
          </Styled.SpeechBubble>
        </Styled.MashongWrapper>
      </Styled.Dialog>
    </Modal>
  );
};

export default NotRecruitmentPeriod;
