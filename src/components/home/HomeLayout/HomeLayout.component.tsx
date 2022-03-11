import { ReactNode } from 'react';
import * as Styled from './HomeLayout.styled';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default HomeLayout;
