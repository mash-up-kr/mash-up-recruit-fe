import { FAQ_NODE_PAGE, RECRUIT_NODE_PAGE, APPLY_NODE_PAGE } from '@/constants';

const node = {
  name: 'Node',
  role: 'Backend Developer',
  path: {
    recruit: RECRUIT_NODE_PAGE,
    faq: FAQ_NODE_PAGE,
    apply: APPLY_NODE_PAGE,
  },
  introduction: (
    <>
      안녕하세요!!
      <br />
      일할 땐 일하고 놀 땐 놀자! 일일놀놀 노드팀입니다!
      <br />
      저희는 다양한 사람들과 다양한 경험을 하며 어디서나 필요로 하는 인재가 되는 것을 지향합니다🤓
      <br />
      모르는 것을 모른다 말하고 알려고 노력하는 지적 솔직함을 지향합니다💻
      <br />
      하지만 일하기만 하는 사무적 관계는 No👊 놀기만 하는 관계도 No👊
      <br />
      서로의 성장와 재미 두 마리 토끼를 모두 잡는 것이 Node팀의 목표입니다!🔥🔥
      <br />
      여러분들을 Mash-Up Node팀으로 초대합니다!
    </>
  ),
  talent: [
    {
      id: 'node-talent-1',
      content: <>😏 목표의식과 책임감이 강한 사람</>,
    },
    {
      id: 'node-talent-2',
      content: <>🔥 부족한 부분을 채우고자 끊임없이 새로운 기술을 탐구하는 사람</>,
    },
    {
      id: 'node-talent-3',
      content: <>😎 성장과 공유의 즐거움을 아는/알고 싶은 사람</>,
    },
    {
      id: 'node-talent-4',
      content: <>💻 기술 얘기하는 걸 좋아하는 코딩 덕후</>,
    },
  ],
  study: [
    {
      id: 'node-study-1',
      content: <>⌨️ Typescript</>,
    },
    {
      id: 'node-study-2',
      content: <>🐈 NestJS</>,
    },
    {
      id: 'node-study-3',
      content: <>🐳 Docker</>,
    },
    {
      id: 'node-study-4',
      content: <>☸️ Kubernetes</>,
    },
  ],
  interview: [
    {
      id: 'node-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'node-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  questions: [
    {
      id: 'node-question-1',
      title: { text: '노드팀은 무엇을 하나요?' },
      content: [
        {
          id: 'node-question-1-1',
          content: (
            <>스터디로 함께 공부하고 기술적인 논의를 진행하며, 다 같이 공유하고 성장합니다.</>
          ),
        },
        {
          id: 'node-question-1-2',
          content: <>온/오프라인 모각코(모여서 각자 코딩)로 정기적으로 모이며 친목을 다집니다.</>,
        },
        {
          id: 'node-question-1-3',
          content: (
            <>
              스터디로만 끝나는 공부는 그만! 실력 있는 프론트엔드 개발자와 디자이너와 함께 멋진
              프로젝트를 진행합니다.
            </>
          ),
        },
        {
          id: 'node-question-1-4',
          content: (
            <>
              이전 기수 노드팀 활동을 자세히 보려면 블로그를 참고하세요! 12기 포스팅의 주인공은
              여러분!
              <br />
              <a href="https://mash-up.tistory.com/search/노드팀">
                https://mash-up.tistory.com/search/노드팀
              </a>
            </>
          ),
        },
      ],
    },
    {
      id: 'node-question-2',
      title: { text: '스터디 진행방식은 어떻게 되나요?' },
      content: [
        {
          id: 'node-question-2-1',
          content: <>공식 문서로 빠르게 기술 스터디를 진행합니다. (무거운 책 No No)</>,
        },
        {
          id: 'node-question-2-2',
          content: (
            <>
              로컬 서버만으로 끝나지 않고 도커, 쿠버네티스 기반의 실제 배포 파이프라인을 함께
              만들어봅니다.
            </>
          ),
        },
        {
          id: 'node-question-2-3',
          content: <>지식이 머리 속 이론에서 그치지 않게 기업 온보딩 과제를 실습을 합니다.</>,
        },
        {
          id: 'node-question-2-4',
          content: <>10분 세미나로 새로운 기술을 찍먹하고 팀원들에게 소개합니다.</>,
        },
        {
          id: 'node-question-2-5',
          content: <>매 주 토요일 낮 시간대에 진행합니다. ← 시간 정해지면 추후 변경</>,
        },
      ],
    },
    {
      id: 'node-question-3',
      title: { text: '노드에 대해 얼마나 알아야 지원할 수 있나요?' },
      content: [
        {
          id: 'node-question-3-1',
          content: (
            <>
              노드를 따로 스터디하는 시간이 없기 때문에, 기본적으로 자바스크립트 및 노드를 사용해본
              경험이 있어야합니다!
            </>
          ),
        },
        {
          id: 'node-question-3-2',
          content: (
            <>
              NestJS 프레임워크를 사용하기 때문에 필수적인 건 아니지만, Express와 같은 서버 경험이나
              타입스크립트 사용 경험이 있으면 스터디하기가 더 편할거에요.
            </>
          ),
        },
      ],
    },
  ],
};
export default node;
