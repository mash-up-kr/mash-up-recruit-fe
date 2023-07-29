import type { ComponentProps } from 'react';
import * as Styled from './RecruitEditorContainer.styled';

interface RecruitEditorContainerProps extends ComponentProps<'div'> {}

const RecruitEditorContainer = (props: RecruitEditorContainerProps) => {
  return <Styled.Container {...props} />;
};

export default RecruitEditorContainer;
