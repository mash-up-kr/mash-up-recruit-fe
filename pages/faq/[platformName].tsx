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
        id: 'common-question-1',
        title: { text: '지원 마감시간은 언제인가요?' },
        content: [
          {
            id: 'common-question-1-1',
            content: (
              <>
                3월 29일(화) 오후 11시 59분 59초입니다. 마감 시간 안에 지원서 제출해주시길 바랍니다.
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
                Mash-Up은 격주 토요일 오후 2시에 전체 세미나를 진행하며, 매주 평일 혹은 주말에 팀별
                스터디가 이루어집니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'common-question-3',
        title: { text: '코시국 매쉬업 모임은 어떻게 진행되나요?' },
        content: [
          {
            id: 'common-question-3-1',
            content: (
              <>
                코시국 매쉬업은 Zoom, Discord 채널, 그리고 Google Meet을 통해 매쉬업 전체 세미나 및
                팀별 모임과 스터디를 진행하고 있으며, 매셥 크루원들의 친목 활동 또한 적극적으로
                이루어지고 있습니다.
              </>
            ),
          },
          {
            id: 'common-question-3-2',
            content: (
              <>
                12기는 거리두기 정책의 변화에 맞춰 활동을 하고자 하며, 인원 제한에 맞춰 오프라인
                만남도 진행할 예정 중에 있습니다.
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
                12기의 경우 4월 16일을 시작으로 10월까지 약 6개월 정도 활동할 예정입니다. 2기수
                활동을 권장하며 2기수 이상 활동 시 수료증을 발급해드립니다.
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
            content: <>직장인은 물론 대학생, 졸업생 누구나 참여 가능합니다.</>,
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
                원하시는 주제가 있으시다면 원하시는 스터디를 직접 주최하셔도 됩니다. 실제
                스타트업에서 일하는 방법처럼 기획부터 배포, 유지 보수까지 애자일하게 진행할 예정이니
                많은 지원바랍니다.
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
                네. 비용은 6만원으로 2개월 분할납부 가능합니다. 온라인 행사 참여 상품 및 해커톤을
                진행하면서 필요한 곳에 사용되며 사용 내역을 공개하고 있습니다.
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
                중복지원은 불가합니다. 팀별 지원서 임시저장은 가능하나, 최종 제출한 단 한 개의
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
