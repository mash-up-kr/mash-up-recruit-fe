import {
  FaqLayout,
  FaqHeader,
  SideNavigation,
  FaqQuestionList,
  ModalNavigation,
  SEO,
} from '@/components';
import { objectKeys } from '@/utils/object';
import { adminApiService } from '@/api/services';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useDetectViewPort } from '@/hooks';
import {
  FAQ_COMMON_PAGE,
  PlatformKey,
  platformKeys,
  platformMap,
  VIEWPORT_SIZE,
} from '@/constants';
import transformer, { FaqQuestion } from '@/utils/faq/transformer';

const faqPlatformMap = {
  ...platformMap,
  common: {
    name: '공통질문',
    path: {
      faq: FAQ_COMMON_PAGE,
    },
  },
};

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey | 'common';
}

interface PlatformProps {
  platformName: PlatformKey | 'common';
  questions: FaqQuestion[];
}

const Platform: NextPage<PlatformProps> = ({ platformName, questions }) => {
  const { size } = useDetectViewPort();

  const { name, path } = faqPlatformMap[platformName];

  return (
    <FaqLayout>
      <SEO
        title={`자주 묻는 질문 - ${name}`}
        openGraph={{ url: `https://recruit.mash-up.kr${path.faq}` }}
      />
      <FaqHeader title="자주 묻는 질문" />
      {size === VIEWPORT_SIZE.MOBILE || size === VIEWPORT_SIZE.TABLET_S ? (
        <ModalNavigation platformName={platformName} />
      ) : (
        <SideNavigation platformName={platformName} />
      )}
      <FaqQuestionList questions={questions} />
    </FaqLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [
    { params: { platformName: 'common' } } as const,
    ...objectKeys(platformKeys).map((platformKey) => {
      return { params: { platformName: platformKey } };
    }),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PlatformProps, Params> = async (context) => {
  const { platformName } = context.params!;

  const { data } = await adminApiService.getFaqDataFromStorage({
    accessToken: process.env.ADMIN_TOKEN,
    key: platformName,
  });

  return {
    props: {
      platformName,
      questions: transformer({ blocks: data.valueMap.editorData.blocks }),
    },
  };
};

export default Platform;
