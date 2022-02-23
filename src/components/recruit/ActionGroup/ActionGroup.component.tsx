import { ReactNode } from 'react';
import * as Styled from './ActionGroup.styled';

interface ActionGroupProps {
  children: ReactNode;
}

const ActionGroup = ({ children }: ActionGroupProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default ActionGroup;
