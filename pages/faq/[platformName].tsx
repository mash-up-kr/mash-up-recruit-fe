import { FaqLayout, FaqHeading, SideNavigation, QuestionList, ModalNavigation } from '@/components';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Question } from '@/components/faq/QuestionList/QuestionList.component';
import { useDetectViewPort } from '@/hooks';
import { VIEWPORT_SIZE } from '@/constants';
import { PlatformKey } from '@/components/faq/Navigation/Navigation.component';

const questionsMap: Record<PlatformKey, { questions: Question[] }> = {
  ios: {
    questions: [{ id: '0', title: 'iOS 질문 - 0', content: 'iOS 질문 답변 - 0' }],
  },
  'front-end': {
    questions: [{ id: '0', title: 'Web 질문 - 0', content: 'Web 질문 답변 - 0' }],
  },
  android: {
    questions: [{ id: '0', title: 'Android 질문 - 0', content: 'Android 질문 답변 - 0' }],
  },
  spring: {
    questions: [{ id: '0', title: 'Spring 질문 - 0', content: 'Spring 질문 답변 - 0' }],
  },
  design: {
    questions: [{ id: '0', title: 'Design 질문 - 0', content: 'Design 질문 답변 - 0' }],
  },
  node: {
    questions: [{ id: '0', title: 'Node 질문 - 0', content: 'Node 질문 답변 - 0' }],
  },
};

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface PlatformProps {
  platformName: PlatformKey;
  questions: Question[];
}

const Platform: NextPage<PlatformProps> = ({ platformName, questions }) => {
  const { size } = useDetectViewPort();
  return (
    <FaqLayout>
      <FaqHeading title="자주 묻는 질문" />
      {size === VIEWPORT_SIZE.MOBILE || size === VIEWPORT_SIZE.TABLET_S ? (
        <ModalNavigation platformName={platformName} />
      ) : (
        <SideNavigation platformName={platformName} />
      )}
      <QuestionList questions={questions} />
    </FaqLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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

export const getStaticProps: GetStaticProps<PlatformProps, Params> = async (context) => {
  const { platformName } = context.params!;
  const { questions } = questionsMap[platformName];

  return {
    props: {
      platformName,
      questions,
    },
  };
};

export default Platform;
