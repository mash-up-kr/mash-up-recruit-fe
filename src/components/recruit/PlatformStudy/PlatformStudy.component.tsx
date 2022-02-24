import { ReactNode } from 'react';
import * as Styled from './PlatformStudy.styled';

interface PlatformStudyProps {
  children: ReactNode;
}

const PlatformStudy = ({ children }: PlatformStudyProps) => {
  return (
    <Styled.Container>
      <Styled.Heading>스터디</Styled.Heading>
      {children}
    </Styled.Container>
  );
};
export default PlatformStudy;
