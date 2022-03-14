import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PlatformKey, platformMap, platforms } from '@/constants';
import {
  RecruitHeader,
  PlatformHero,
  Divider,
  BottomNavigation,
  NavigationHeader,
  PlatformInformation,
  PlatformTalent,
  PlatformInterviewSchedule,
  PlatformStudy,
  ActionGroup,
  RecruitLayout,
  RecruitContents,
  ApplyLinkButton,
  BulletedList,
} from '@/components';

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface PlatformProps {
  platformName: PlatformKey;
}

const Platform: NextPage<PlatformProps> = ({ platformName }) => {
  const {
    name: currentPlatformName,
    role: currentPlatformRole,
    path: currentPlatformPath,
    introduction: currentPlatformIntroduction,
    study: currentPlatformStudy,
    talent: currentPlatformTalent,
    interview: currentPlatformInterview,
    hero: currentPlatformHero,
  } = platformMap[platformName];

  const otherPlatforms = platforms.filter(({ key }) => key !== platformName);

  return (
    <RecruitLayout>
      <PlatformHero color={currentPlatformHero.color} emojis={currentPlatformHero.emojis} />
      <RecruitHeader name={currentPlatformName} role={currentPlatformRole} />
      <RecruitContents>
        <PlatformInformation name={currentPlatformName}>
          {currentPlatformIntroduction}
        </PlatformInformation>
        <PlatformTalent>
          <BulletedList items={currentPlatformTalent} />
        </PlatformTalent>
        <PlatformStudy>
          <BulletedList items={currentPlatformStudy} />
        </PlatformStudy>
        <PlatformInterviewSchedule>
          <BulletedList items={currentPlatformInterview} />
        </PlatformInterviewSchedule>
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
  return {
    paths: [
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
