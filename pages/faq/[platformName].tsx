import {
  FaqLayout,
  FaqHeader,
  SideNavigation,
  QuestionList,
  ModalNavigation,
  SEO,
} from '@/components';
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
        id: 'common-question-1',
        title: { text: '지원 마감시간은 언제인가요?' },
        content: [
          {
            id: 'common-question-1-1',
            content: (
              <>
                1월 25일(수) 오후 11시 59분 59초입니다. 마감 시간 안에 지원서 제출해주시길 바랍니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-2',
        title: { text: '매쉬업은 언제 모임을 가지나요?' },
        content: [
          {
            id: 'common-question-2-1',
            content: (
              <>
                Mash-Up은 격주 토요일 오후 3시 ~ 6시에 전체 세미나를 진행하며, 매주 평일 혹은 주말에
                팀별 스터디가 이루어집니다. 자세한건 채널톡으로 각 팀 스태프에게 문의해주세요.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-3',
        title: { text: '모임은 온라인으로 진행되나요, 오프라인으로 진행되나요?' },
        content: [
          {
            id: 'common-question-3-1',
            content: (
              <>
                세미나 회차별로 상이합니다. 각 세미나별 온라인, 오프라인 여부 계획은 정해져있지만
                상황에 따라 변동될 수 있습니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-4',
        title: { text: '활동 기간은 얼마나 되나요?' },
        content: [
          {
            id: 'common-question-4-1',
            content: (
              <>
                13기의 경우 2월 11일을 시작으로 8월까지 약 6개월 정도 활동 할 예정입니다.
                <br />
                2기수 이상 활동을 권장하며 2기수 이상 활동 시 수료증을 발급해드립니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-5',
        title: { text: '직장인 또는 대학생, 졸업생인데 참여 가능한가요?' },
        content: [
          {
            id: 'common-question-5-1',
            content: <>직장인은 물론 대학생, 졸업생, 만 19세 이상이라면 누구나 참여 가능합니다.</>,
          },
        ],
      },
      {
        id: 'common-question-6',
        title: { text: '매쉬업에 가면 무엇을 하나요?' },
        content: [
          {
            id: 'common-question-6-1',
            content: (
              <>
                매쉬업은 팀별 스터디와 프로젝트를 진행하고 있습니다. 각 팀별로 스터디를 진행하고,
                원하시는 주제가 있으시다면 원하시는 스터디를 직접 주최하셔도 됩니다. 프로젝트는 실제
                스타트업에서 일하는 방법처럼 기획부터 배포, 유지 보수까지 애자일하게 진행 할
                예정이니 많은 지원 바랍니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-7',
        title: { text: '회비 있나요?' },
        content: [
          {
            id: 'common-question-7-1',
            content: (
              <>
                네. 비용은 10만원으로 최대 3개월 분할납부가 가능합니다. 세미나 장소 대관 및 해커톤을
                진행 비용 등으로 사용되고 있으며 운영진이 내역을 기록하여 공개하고 있습니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-8',
        title: { text: '중복지원이 가능한가요?' },
        content: [
          {
            id: 'common-question-8-1',
            content: (
              <>
                중복지원은 불가합니다. 팀별 지원서 임시저장은 가능하나, 최종 제출은 단 한 개의
                지원서만 가능하다는 점 참고 부탁드립니다.
              </>
            ),
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
  const { name, questions, path } = platformWithCommonMap[platformName];
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
