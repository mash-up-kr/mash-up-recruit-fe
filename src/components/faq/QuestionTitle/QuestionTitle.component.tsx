import * as Styled from './QuestionTitle.styled';

interface QuestionTitleProps {
  emoji?: string;
  text: string;
}

const QuestionTitle = ({ emoji, text }: QuestionTitleProps) => {
  return (
    <Styled.Container>
      <Styled.Title emoji={emoji}>{text}</Styled.Title>
    </Styled.Container>
  );
};
export default QuestionTitle;
