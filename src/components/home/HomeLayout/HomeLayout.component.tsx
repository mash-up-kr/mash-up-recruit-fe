import { ReactNode } from 'react';
import * as Styled from './HomeLayout.styled';

interface HomeLayoutProps {
  children: ReactNode;
  visibility: boolean;
}

const HomeLayout = ({ children, visibility }: HomeLayoutProps) => {
  return <Styled.Layout visibility={visibility.toString()}>{children}</Styled.Layout>;
};

export default HomeLayout;
