import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PlatformKey, platformMap, platforms } from '@/constants';
import editorjsHTML from 'editorjs-html';
import { unescape, flow, toLower } from 'lodash-es';
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
  const [prefix, separator] = ['recruit', '-'];

  const { data } = await adminApiService.getKeysFromStorage({
    accessToken: process.env.ADMIN_TOKEN,
  });

  const paths = data.keyStrings
    .map(toLower)
    .filter((key: string) => key.includes(`${prefix}${separator}`))
    .filter((key: string) =>
      [
        `${prefix}${separator}ios`,
        `${prefix}${separator}web`,
        `${prefix}${separator}android`,
        `${prefix}${separator}spring`,
        `${prefix}${separator}design`,
        `${prefix}${separator}node`,
      ].includes(key),
    )
    .map((key: string) => {
      const [, platformName] = key.split(separator);
      return { params: { platformName: platformName as PlatformKey } };
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
