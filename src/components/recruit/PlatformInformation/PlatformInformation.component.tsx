import { ReactNode } from 'react';
import * as Styled from './PlatformInformation.styled';

interface PlatformInformationProps {
  name: string;
  children: ReactNode;
}

const PlatformInformation = ({ name, children }: PlatformInformationProps) => {
  return (
    <Styled.Container>
      <Styled.Heading>{name} 팀 소개</Styled.Heading>
      <Styled.Paragraph>{children}</Styled.Paragraph>
    </Styled.Container>
  );
};
export default PlatformInformation;
