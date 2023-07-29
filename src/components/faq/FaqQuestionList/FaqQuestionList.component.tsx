import { Accordion } from '@/components';

import { FaqQuestion } from '@/utils/faq/transformer';
import * as Styled from './FaqQuestionList.styled';

interface FaqQuestionListProps {
  questions: FaqQuestion[];
}

const FaqQuestionList = ({ questions }: FaqQuestionListProps) => {
  return (
    <Styled.List>
      {questions.map(({ title, content }) => (
        <li key={title}>
          <Accordion id={title} title={title} content={content} />
        </li>
      ))}
    </Styled.List>
  );
};
export default FaqQuestionList;
