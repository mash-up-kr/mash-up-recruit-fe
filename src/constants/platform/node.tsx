import { FAQ_NODE_PAGE, RECRUIT_NODE_PAGE, APPLY_NODE_PAGE } from '@/constants';
import NodeLeftEmoji from '@/assets/svg/node-left-emoji.svg';
import NodeRightEmoji from '@/assets/svg/node-right-emoji.svg';

const node = {
  id: 'node',
  name: 'Node',
  role: 'Backend Developer',
  path: {
    recruit: RECRUIT_NODE_PAGE,
    faq: FAQ_NODE_PAGE,
    apply: APPLY_NODE_PAGE,
  },
  hero: {
    color: '#1D1F22',
    emojis: [NodeLeftEmoji, NodeRightEmoji],
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
      content: <>🔥 도전에 대해 거부감이 없고 적극적인 사람</>,
    },
    {
      id: 'node-talent-3',
      content: <>😎 Deep-Dive를 좋아하는 사람</>,
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
      content: <>📖 공유하고 싶은 기술에 대한 자율 스터디</>,
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
      ],
    },
    {
      id: 'node-question-2',
      title: { text: '스터디 진행방식은 어떻게 되나요?' },
      content: [
        {
          id: 'node-question-2-1',
          content: <>플랫폼 스터디와 자율 스터디를 진행합니다</>,
        },
        {
          id: 'node-question-2-2',
          content: <>플랫폼 스터디</>,
          subItems: [
            {
              id: 'node-question-2-2-1',
              content: <>정기적으로 진행되는 단체 스터디입니다.</>,
            },
            {
              id: 'node-question-2-2-2',
              content: <>한 달에 2번 정도씩 정해진 주제에 대해 다같이 스터디합니다.</>,
            },
          ],
        },
        {
          id: 'node-question-2-3',
          content: <>자율 스터디</>,
          subItems: [
            {
              id: 'node-question-2-3-1',
              content: (
                <>
                  수요조사를 통해 마음이 맞는 사람들끼리 자율적으로 스터디를 진행하게 됩니다
                  (Architecture, Design Pattern 등등..)
                </>
              ),
            },
            {
              id: 'node-question-2-3-2',
              content: <>주제, 방법, 시간, 장소는 모두 스터디원들끼리 정하게 됩니다.</>,
            },
          ],
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
              NodeJS 를 따로 스터디하는 시간은 없기 때문에, 기본적으로 NodeJS를 사용해본 경험이
              있어야합니다!
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
