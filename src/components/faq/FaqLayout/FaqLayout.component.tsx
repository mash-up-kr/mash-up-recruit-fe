import { ReactNode } from 'react';
import * as Styled from './FaqLayout.styled';

interface FaqLayoutProps {
  children: ReactNode;
}

const FaqLayout = ({ children }: FaqLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default FaqLayout;
