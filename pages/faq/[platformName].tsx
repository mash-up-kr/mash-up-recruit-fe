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
import transformer from '@/utils/faq/transformer';
import type { FaqQuestion } from '@/utils/faq/transformer';

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

  // adminApiService는 BaseApiService.handleError에서 항상 rethrow한다. 잡지 않으면
  // FAQ 저장소가 네트워크 수준으로 실패할 때 7개 페이지의 빌드가 전부 죽는다.
  const faqStorageResponse = await adminApiService
    .getFaqDataFromStorage({
      accessToken: process.env.ADMIN_TOKEN,
      key: platformName,
    })
    .catch(() => null);

  const blocks = faqStorageResponse?.data?.valueMap?.editorData?.blocks;

  return {
    props: {
      platformName,
      questions: blocks ? transformer({ blocks }) : [],
    },
  };
};

export default Platform;
