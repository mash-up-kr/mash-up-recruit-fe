import { FAQ_FRONT_END_PAGE, RECRUIT_FRONT_END_PAGE, APPLY_FRONT_END_PAGE } from '@/constants';
import WebLeftEmoji from '@/assets/svg/web-left-emoji.svg';
import WebRightEmoji from '@/assets/svg/web-right-emoji.svg';

const web = {
  id: 'web',
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
  introduction: (
    <>
      Mash-Up의 Web 팀은 놀땐 놀고 할땐 하는 열정있는 팀원들로 구성되어 있으며 React를 이용해
      프로젝트를 진행하고 있습니다. 혼자만 알기보단 다 같이 공유하고 개발적으로 어려운 부분이 있다면
      자유롭게 얘기하고 함께 해결해 나가고 있습니다.
      <br />
      최종적으로 다른 팀들과 협업하며 프로젝트를 성공적으로 배포해 동아리 활동에 성취감을 느낄 수
      있도록 하고자 합니다.
    </>
  ),
  talent: [
    {
      id: 'web-talent-1',
      content: <>온라인,오프라인 가리지 않고 활발하게 소통하며 지식을 공유하는 것을 즐기는 사람</>,
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
      content: <>책임감 있게 프로젝트를 끝까지 완수할 수 있는 사람</>,
    },
    {
      id: 'web-talent-5',
      content: <>놀 땐 놀고 할 땐 하는 어떤 일에도 열정적인 사람</>,
    },
  ],
  study: [
    {
      id: 'web-study-1',
      content: <>웹 접근성 케이스 스터디</>,
    },
    {
      id: 'web-study-2',
      content: <>JavaScript, TypeScript 스터디</>,
    },
    {
      id: 'web-study-3',
      content: <>CS 스터디 (네트워크, 알고리즘, 운영체제 등)</>,
    },
    {
      id: 'web-study-4',
      content: <>프론트엔드 테스팅 스터디</>,
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

  questions: [
    {
      id: 'web-question-1',
      title: { text: '웹팀은 주로 어떤 활동을 하나요?' },
      content: [
        {
          id: 'web-question-1-1',
          content: (
            <>
              전체 세미나가 열리는 주에 웹팀 세미나도 함께 진행합니다. 2주에 한 번씩 모일거에요! 😄
            </>
          ),
        },
        {
          id: 'web-question-1-2',
          content: (
            <>
              깜짝 모각코나 번개모임을 많이 열 예정이에요! 누구나 열 수 있고 참여할 수 있으니
              원한다면 함께해요~
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
              공유하는 Tech talk💬 시간을 가져요! 여러분이 공부했던 라이브러리나 그 외에도 개발과
              관련된 주제라면 편하게 공유해주세요. 나누면 배가되요~
            </>
          ),
        },
        {
          id: 'web-question-2-2',
          content: (
            <>
              웹 구성원들이 번갈아가며 자유로운 주제로 발표를 진행해요. 이전에는 OpenAPI
              Specification, stale-while-revalidate, Module Federation 등의 주제로 발표가 진행
              되었어요 ✌️
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
              웹 개발자로 일을 하고 있는 직장인도 있구요, 웹 분야를 열심히 공부하는 대학생도 있어요!
              지금 하고 있는 업무나 나이에 상관없이 웹에 대한 열정이 넘치는 사람들과 함께할 수
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
            <>
              프로젝트를 성공적으로 배포해서 13기 활동에 성취감을 느낄 수 있는 웹 팀을 만들고
              싶어요!
            </>
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
              함께 성장하는 재미를 느낄 수 있는 매쉬업의 구성원이 되어 다양한 분야의 사람들과 협업해
              보아요
            </>
          ),
        },
      ],
    },
  ],
};

export default web;
