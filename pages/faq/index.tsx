import { NextPage } from 'next';
import { FaqLayout, FaqHeading, SideNavigation, QuestionList, ModalNavigation } from '@/components';
import { Question } from '@/components/faq/QuestionList/QuestionList.component';
import { useDetectViewPort } from '@/hooks';
import { VIEWPORT_SIZE } from '@/constants';

const questions: Question[] = [
  {
    id: '0',
    title: '공통 질문 - 0',
    content: '공통 질문 답변 - 0',
  },
  {
    id: '1',
    title: '공통 질문 - 1',
    content: `공통 질문 답변 - 1 \n 1231313`,
  },
  {
    id: '2',
    title: '공통 질문 - 2',
    content: '공통 질문 답변 - 2',
  },
  {
    id: '3',
    title: '공통 질문 - 3',
    content: '공통 질문 답변 - 3',
  },
  {
    id: '4',
    title: '공통 질문 - 4',
    content: '공통 질문 답변 - 4',
  },
];

const Faq: NextPage = () => {
  const { size } = useDetectViewPort();

  return (
    <FaqLayout>
      <FaqHeading title="자주 묻는 질문" />
      {size === VIEWPORT_SIZE.MOBILE || size === VIEWPORT_SIZE.TABLET_S ? (
        <ModalNavigation />
      ) : (
        <SideNavigation />
      )}
      <QuestionList questions={questions} />
    </FaqLayout>
  );
};

export default Faq;
