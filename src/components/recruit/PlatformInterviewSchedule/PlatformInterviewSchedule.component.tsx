import { ReactNode } from 'react';
import * as Styled from './PlatformInterviewSchedule.styled';

interface PlatformInterviewScheduleProps {
  children: ReactNode;
}

const PlatformInterviewSchedule = ({ children }: PlatformInterviewScheduleProps) => {
  return (
    <Styled.Container>
      <Styled.Heading>예상 면접일시</Styled.Heading>
      {children}
    </Styled.Container>
  );
};
export default PlatformInterviewSchedule;
