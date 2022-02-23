import { ReactNode } from 'react';
import * as Styled from './PlatformTalent.styled';

interface PlatformTalentProps {
  children: ReactNode;
}

const PlatformTalent = ({ children }: PlatformTalentProps) => {
  return (
    <Styled.Container>
      <Styled.Heading>인재상</Styled.Heading>
      {children}
    </Styled.Container>
  );
};
export default PlatformTalent;
