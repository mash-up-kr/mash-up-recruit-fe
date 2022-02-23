import { ReactNode } from 'react';
import * as Styled from './RecruitLayout.styled';

interface RecruitLayoutProps {
  children: ReactNode;
}

const RecruitLayout = ({ children }: RecruitLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default RecruitLayout;
