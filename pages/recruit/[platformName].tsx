import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PlatformKey, platformKeys, platformMap, platforms } from '@/constants';
import editorjsHTML from 'editorjs-html';
import { unescape, flow } from 'lodash-es';
import {
  RecruitHeader,
  PlatformHero,
  Divider,
  BottomNavigation,
  NavigationHeader,
  RecruitContents,
  RecruitLayout,
  ApplyLinkButton,
  ActionGroup,
  RecruitEditorContainer,
  SEO,
} from '@/components';
import { adminApiService } from '@/api/services';
import { objectKeys } from '@/utils/object';

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface PlatformProps {
  platformName: PlatformKey;
  html: string;
}

const Platform: NextPage<PlatformProps> = ({ platformName, html }) => {
  const {
    name: currentPlatformName,
    role: currentPlatformRole,
    path: currentPlatformPath,
    hero: currentPlatformHero,
  } = platformMap[platformName];

  const otherPlatforms = platforms.filter(({ key }) => key !== platformName);

  return (
    <RecruitLayout>
      <SEO
        title={`모집 공고 - ${currentPlatformName}`}
        openGraph={{ url: `https://recruit.mash-up.kr${currentPlatformPath.recruit}` }}
      />
      <PlatformHero color={currentPlatformHero.color} emojis={currentPlatformHero.emojis} />
      <RecruitHeader name={currentPlatformName} role={currentPlatformRole} />
      <RecruitContents>
        <RecruitEditorContainer dangerouslySetInnerHTML={{ __html: html }} />
        <ActionGroup>
          <ApplyLinkButton applyPath={currentPlatformPath.apply} />
        </ActionGroup>
      </RecruitContents>
      <Divider />
      <NavigationHeader />
      <BottomNavigation platforms={otherPlatforms} />
    </RecruitLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = objectKeys(platformKeys).map((platformKey) => {
    return { params: { platformName: platformKey } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PlatformProps, Params> = async (context) => {
  const { platformName } = context.params!;

  const removeWrongAmpString = (value: string) => value.replace(/&amp;/g, '&');

  const { data } = await adminApiService.getRecruitDataFromStorage({
    accessToken: process.env.ADMIN_TOKEN,
    key: platformName,
  });

  const html = editorjsHTML()
    .parse(data.valueMap.editorData)
    .map(flow(removeWrongAmpString, unescape))
    .join('');

  return {
    props: {
      platformName,
      html,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Platform;
