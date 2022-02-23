import { FaqLayout, FaqHeader, SideNavigation, QuestionList, ModalNavigation } from '@/components';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useDetectViewPort } from '@/hooks';
import { FAQ_COMMON_PAGE, PlatformKey, platformMap, VIEWPORT_SIZE } from '@/constants';

const platformWithCommonMap = {
  ...platformMap,
  common: {
    name: '공통질문',
    path: {
      faq: FAQ_COMMON_PAGE,
    },
    questions: [
      {
        id: 'common-1',
        title: '공통질문입니다',
        content: [
          {
            id: 'common-1',
            content: <>공통질문이에요</>,
          },
        ],
      },
    ],
  },
};

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey | 'common';
}

interface PlatformProps {
  platformName: PlatformKey | 'common';
}

const Platform: NextPage<PlatformProps> = ({ platformName }) => {
  const { size } = useDetectViewPort();
  const { questions } = platformWithCommonMap[platformName];
  return (
    <FaqLayout>
      <FaqHeader title="자주 묻는 질문" />
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
      { params: { platformName: 'common' } },
      { params: { platformName: 'ios' } },
      { params: { platformName: 'web' } },
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

  return {
    props: {
      platformName,
    },
  };
};

export default Platform;
