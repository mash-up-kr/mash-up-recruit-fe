import { StatusDetailBackground } from '@/components';
import * as Styled from './ApplyException.styled';

const ApplyException = () => {
  return (
    <StatusDetailBackground contentSize="xs">
      <Styled.ExceptionMessage>
        결과를 처리하는 과정에서 오류가 발생했습니다 :( {'\n'}페이지 우측 하단의 채팅 상담을 통해
        문의해주세요.
      </Styled.ExceptionMessage>
    </StatusDetailBackground>
  );
};

export default ApplyException;
