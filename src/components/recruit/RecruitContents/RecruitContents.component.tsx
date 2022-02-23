import { ReactNode } from 'react';
import * as Styled from './RecruitContents.styled';

interface RecruitContentsProps {
  children: ReactNode;
}

const RecruitContents = ({ children }: RecruitContentsProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
export default RecruitContents;
