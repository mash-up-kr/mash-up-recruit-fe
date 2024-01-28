import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { CURRENT_GENERATION, PlatformKey, platformMap, platforms } from '@/constants';
import parser from '@/utils/editorjs-html';
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
import { RecruitScheduleArray } from '@/types/dto';
import { generateRecruitSchedule } from '@/utils/date';

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface PlatformProps {
  platformName: PlatformKey;
  recruitScheduleArray: RecruitScheduleArray;
  html: string;
}

const Platform: NextPage<PlatformProps> = ({ platformName, recruitScheduleArray, html }) => {
  const {
    name: currentPlatformName,
    role: currentPlatformRole,
    path: currentPlatformPath,
    hero: currentPlatformHero,
  } = platformMap[platformName];

  const otherPlatforms = platforms.filter(({ key }) => key !== platformName);

  const recruitSchedule = generateRecruitSchedule(recruitScheduleArray);

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
          <ApplyLinkButton
            applyPath={currentPlatformPath.apply}
            recruitSchedule={recruitSchedule}
          />
        </ActionGroup>
      </RecruitContents>
      <Divider />
      <NavigationHeader />
      <BottomNavigation platforms={otherPlatforms} recruitSchedule={recruitSchedule} />
    </RecruitLayout>
  );
};

export const getServerSideProps: GetServerSideProps<PlatformProps, Params> = async (context) => {
  const { platformName } = context.params!;

  const removeWrongAmpString = (value: string) => value.replace(/&amp;/g, '&');

  const recruitScheduleResponse = await fetch(
    `https://api.dev-recruit.mash-up.kr/api/v1/applications/schedule/${CURRENT_GENERATION}`,
  );

  if (!recruitScheduleResponse.ok) {
    return { props: { platformName, recruitScheduleArray: [], html: '' } };
  }

  const { data: recruitScheduleArray }: { data: RecruitScheduleArray } =
    await recruitScheduleResponse.json();

  const { data } = await adminApiService.getRecruitDataFromStorage({
    accessToken: process.env.ADMIN_TOKEN,
    key: platformName,
  });

  const html = parser
    .parse(data.valueMap.editorData)
    .map(flow(removeWrongAmpString, unescape))
    .join('');

  return {
    props: {
      platformName,
      recruitScheduleArray,
      html,
    },
  };
};

export default Platform;
