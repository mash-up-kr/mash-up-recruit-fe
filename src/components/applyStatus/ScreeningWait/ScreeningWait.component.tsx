import { StatusDetailBackground } from '@/components';
import * as Styled from './ScreeningWait.styled';

const ScreeningWait = () => {
  return (
    <StatusDetailBackground imageType="working" contentSize="s">
      <Styled.ScreeningWait>
        <Styled.StatusMessage>
          {'Mash-Up Staff는 열심히 서류 검토 중.. \n조금만 기다려주세요!'}
        </Styled.StatusMessage>
        <Styled.StatusDescription>
          Mash-Up Staff가 꼼꼼히 서류를 검토하고 있습니다. 1월 30일(월) 오전 10시에 서류 결과 발표를
          꼭 확인해주세요!
        </Styled.StatusDescription>
      </Styled.ScreeningWait>
    </StatusDetailBackground>
  );
};

export default ScreeningWait;
