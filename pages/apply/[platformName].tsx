import { ApplyLayout } from '@/components';
import {
  PlatformHeadings,
  PLATFORM_HEADINGS,
} from '@/components/apply/ApplyForm/ApplyForm.component';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export interface Question {
  content: string;
  maxContentSize: number;
  questionId: number;
  questionType: 'MULTI_LINE_TEXT' | 'SINGLE_LINE_TEXT';
  required: boolean;
}

interface ApplyProps {
  questionList: Question[];
}

const Apply = ({ questionList }: ApplyProps) => {
  const route = useRouter();

  return (
    <ApplyLayout
      heading={PLATFORM_HEADINGS[route.asPath as keyof PlatformHeadings]}
      questionList={questionList}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { platformName: 'ios' } },
      { params: { platformName: 'front-end' } },
      { params: { platformName: 'android' } },
      { params: { platformName: 'spring' } },
      { params: { platformName: 'design' } },
      { params: { platformName: 'node' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const DUMMY_QUESTION_LIST = [
    {
      content: '매시업에 지원하게 된 이유가 뭔가요? (최소 200자 이상)',
      maxContentSize: 200,
      questionId: 0,
      questionType: 'MULTI_LINE_TEXT',
      required: true,
    },
    {
      content: '프로젝트 진행 또는 참여한 경험이 있다면 자세히 서술해주세요.(400자 이내)',
      maxContentSize: 400,
      questionId: 1,
      questionType: 'MULTI_LINE_TEXT',
      required: true,
    },
    {
      content: '디자인팀에 들어오게 된다면 어떤 활동을 하고 싶나요?(100자이내)',
      maxContentSize: 100,
      questionId: 2,
      questionType: 'MULTI_LINE_TEXT',
      required: true,
    },
    {
      content:
        '자신을 드러낼 수 있는 개인 블로그나 노션, Github 링크, 포트폴리오 등을 자유롭게 입력해주세요.',
      maxContentSize: 20,
      questionId: 3,
      questionType: 'SINGLE_LINE_TEXT',
      required: true,
    },
  ];

  return {
    props: {
      questionList: DUMMY_QUESTION_LIST,
    },
  };
};

export default Apply;
