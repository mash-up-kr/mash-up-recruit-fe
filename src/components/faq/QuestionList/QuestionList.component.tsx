import { Accordion } from '@/components';
import { Item } from '@/components/common/BulletedList/BulletedList.component';
import * as Styled from './QuestionList.styled';

export interface Question {
  id: string;
  title: string;
  content: Item[];
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
