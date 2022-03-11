import { Accordion, QuestionTitle } from '@/components';
import { Question } from '@/constants';
import * as Styled from './QuestionList.styled';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <Styled.List>
      {questions.map(({ id, title, content }) => (
        <li key={id}>
          <Accordion
            id={id}
            title={<QuestionTitle emoji={title.emoji} text={title.text} />}
            content={content}
          />
        </li>
      ))}
    </Styled.List>
  );
};
export default QuestionList;
