import { ReactNode } from 'react';
import * as Styled from './ScreenReaderOnly.styled';

interface ScreenReaderOnlyProps {
  children: ReactNode;
}

const ScreenReaderOnly = ({ children }: ScreenReaderOnlyProps) => {
  return <Styled.ScreenReaderOnly>{children}</Styled.ScreenReaderOnly>;
};

export default ScreenReaderOnly;
