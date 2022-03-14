import { FAQ_FRONT_END_PAGE, RECRUIT_FRONT_END_PAGE, APPLY_FRONT_END_PAGE } from '@/constants';
import WebLeftEmoji from '@/assets/svg/web-left-emoji.svg';
import WebRightEmoji from '@/assets/svg/web-right-emoji.svg';

const web = {
  name: 'Web',
  role: 'Frontend Developer',
  path: {
    recruit: RECRUIT_FRONT_END_PAGE,
    faq: FAQ_FRONT_END_PAGE,
    apply: APPLY_FRONT_END_PAGE,
  },
  hero: {
    color: '#2F45B9',
    emojis: [WebLeftEmoji, WebRightEmoji],
  },
  talent: [
    {
      id: 'web-talent-1',
      content: <>온라인 모임에도 활발하게 참여하며 남들과 지식을 공유하는걸 즐기는 사람</>,
    },
    {
      id: 'web-talent-2',
      content: <>웹 생태계에 관심이 많고 JavaScript에 진심인 사람</>,
    },
    {
      id: 'web-talent-3',
      content: <>리액트를 사용한 프로젝트 경험이 있는 사람</>,
    },
    {
      id: 'web-talent-4',
      content: <>협업에 관심이 많고, 책임감 있게 프로젝트를 끝까지 완수할 수 있는 사람</>,
    },
    {
      id: 'web-talent-5',
      content: <>놀 땐 놀고 할 땐 하는 어떤 일에도 열정적인 사람</>,
    },
  ],
  study: [
    {
      id: 'web-study-1',
      content: <>포트폴리오 스터디 (with product design team)</>,
    },
    {
      id: 'web-study-2',
      content: <>JavaScript, TypeScript 스터디</>,
    },
    {
      id: 'web-study-3',
      content: <>웹 기술 트렌드 스터디(React 3rd party library, GraphQL 등)</>,
    },
  ],
  interview: [
    {
      id: 'web-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'web-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  introduction: (
    <>
      Mash-Up의 Web 팀은 놀땐 놀고 할땐 하는 열정있는 팀원들로 구성되어 있고 React를 이용하여
      프로젝트를 진행하고 있습니다. 혼자만 알기보단 다 같이 공유하고 개발적으로 어려운 부분이 있다면
      함께 해결해 나가는것을 추구합니다.
      <br />
      다른 팀들과 소통하면서 좋은 관계를 유지하고 프로젝트를 성공적으로 배포해서 성취감을 느낄 수
      있는 활동을 수행하는 것이 목표입니다.
    </>
  ),
  questions: [
    {
      id: 'web-question-1',
      title: { text: '웹팀은 주로 어떤 활동을 하나요?' },
      content: [
        {
          id: 'web-question-1-1',
          content: <>전체 세미나가 없는 격주 토요일마다 플랫폼 세미나를 진행합니다 😄</>,
        },
        {
          id: 'web-question-1-2',
          content: (
            <>
              깜짝 모각코나 번개모임을 많이 열 예정이에요(방역수칙은 지키면서)! 누구나 열 수 있고
              참여할 수 있으니 원한다면 함께해요~ 하지만 사회적 거리두기는 준수해요 🙏
            </>
          ),
        },
      ],
    },
    {
      id: 'web-question-2',
      title: { text: '세미나 진행은 어떻게 되나요?' },
      content: [
        {
          id: 'web-question-2-1',
          content: (
            <>
              간단한 근황 공유와 각자 개발하면서 쌓은 경험이나 노하우, 기술들을 함께 이야기하며
              공유하는 Tech talk💬 시간을 가져요! 여러분이 공부했던 라이브러리나 그 외 개발관련 어떤
              주제든 공유하고 싶은것이 있다면 나눠주세요. 나누면 배가되요~
            </>
          ),
        },
        {
          id: 'web-question-2-2',
          content: (
            <>
              웹 구성원들이 번갈아가며 자유로운 주제로 발표를 진행해요. 이전에는 함수형 프로그래밍,
              ReactQuery, GraphQL등의 주제로 발표가 진행됐었어요 ✌️
            </>
          ),
        },
      ],
    },
    {
      id: 'web-question-3',
      title: { text: '스터디 진행은 어떻게 되나요?' },
      content: [
        {
          id: 'web-question-3-1',
          content: (
            <>
              누구나 하고싶은 스터디를 주최할 수 있고 구성원들이 자유롭게 참여하는 형태로 진행 할
              계획입니다 🥰
            </>
          ),
        },
      ],
    },
    {
      id: 'web-question-4',
      title: { text: '리액트를 잘 몰라도 괜찮을까요?' },
      content: [
        {
          id: 'web-question-4-1',
          content: (
            <>
              리액트를 사용해서 작은 프로젝트라도 진행해본 경험이 있는 분들을 우선해서 뽑을
              예정이에요.
            </>
          ),
        },
      ],
    },
    {
      id: 'web-question-5',
      title: { text: '웹 팀은 어떤 사람들이 모여있나요?' },
      content: [
        {
          id: 'web-question-5-1',
          content: (
            <>
              웹 개발자로 일을 하고 있는 직장인도 있구요, 웹 분야를 열심히 공부하는 대학생들도
              있어요! 지금 하고 있는 일이나 나이 상관없이 웹에 대한 열정이 넘치는 사람들과 함께할 수
              있어요~ 🎉
            </>
          ),
        },
        {
          id: 'web-question-5-2',
          content: (
            <>
              이번에 함께할 분들도 끼가 넘치고 동아리 활동에 적극적으로 참여할 수 있는 분들을
              모집하려고 합니다~🍺
            </>
          ),
        },
      ],
    },
    {
      id: 'web-question-6',
      title: { text: '웹 팀의 목표는 무엇인가요?' },
      content: [
        {
          id: 'web-question-6-1',
          content: (
            <>프로젝트를 성공적으로 배포해서 성취감을 느낄 수 있는 동아리를 만들고 싶어요!</>
          ),
        },
        {
          id: 'web-question-6-2',
          content: (
            <>
              혼자만 알기보단 다같이 공유하고 개발적으로 어려운 부분이 있다면 함께 해결해가고
              싶어요. 우린 팀이니까요☺️
            </>
          ),
        },
        {
          id: 'web-question-6-3',
          content: (
            <>
              동아리 활동을 하면서 원하는 목표도 같이 이뤘으면 좋겠어요! 지난 기수에는 취업/이직을
              목표로 하는 분들이 많았는데 목표를 이루신 분들이 많았습니다 :D
            </>
          ),
        },
        {
          id: 'web-question-6-4',
          content: <>재미있고 함께 성장하는 매쉬업의 구성원이 되어주세요!</>,
        },
        {
          id: 'web-question-6-5',
          content: <>웹 팀 뿐만 아니라 다양한 분야의 실력있는 사람들과 좋은 관계를 만들어요</>,
        },
      ],
    },
  ],
};

export default web;
