import { Accordion } from '@/components';
import * as Styled from './QuestionList.styled';

export interface Question {
  id: string;
  title: string;
  content: string;
}

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <Styled.List>
      {questions.map(({ id, title, content }) => (
        <li key={id}>
          <Accordion id={id} title={title} content={content} />
        </li>
      ))}
    </Styled.List>
  );
};
export default QuestionList;
