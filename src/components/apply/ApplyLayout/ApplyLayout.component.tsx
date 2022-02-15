import { ApplyForm } from '@/components';
import { Question } from 'pages/apply/[platformName]';
import * as Styled from './ApplyLayout.styled';

interface ApplyLayoutProps {
  heading: string;
  questionList: Question[];
}

const ApplyLayout = ({ heading, questionList }: ApplyLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
      <ApplyForm heading={heading} questionList={questionList} />
    </Styled.Layout>
  );
};

export default ApplyLayout;
