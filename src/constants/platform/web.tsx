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
      열정적이고 실력있는 현직자와 학생으로 이루어져 있는 Web팀을 아래의 세 문장으로 소개합니다!
      <br />
      <br />
      1️⃣ <strong>다양한 플랫폼과의 협업을 통한 프로젝트에서</strong>
      <br />
      기본적으로 React를 활용하지만, 이 외에도 평소에 써보고 싶었던 또는 궁금했던 기술을 팀원들과의
      협의 하에 자유롭게 시도할 수 있습니다.
      <br />
      <br />
      2️⃣ <strong>함께 성장하고자 노력하기에</strong>
      <br />
      모든 팀원이 개발 관련된 고민이 있으면 함께 고민하고, 나만 알기 아까운 인사이트를 서로
      공유하고, 정기 세미나에서의 기술 발표, 블로그 포스팅 작성, 각종 개발 행사 및 스터디 참여 등을
      자유롭게 진행하며 서로에게 좋은 영향력을 행사하고 있습니다.
      <br />
      <br />
      3️⃣ <strong>개발과 더불어 좋은 동료도 만들 수 있게끔</strong>
      <br />할 땐 확실히 하지만 놀 때도 누구보다 확실히 놀며 서로에게 좋은 동료이자 든든한 친구가
      되어줍니다!
      <br />
      <br />
      올해 Web팀과 함께 함께 폭발적으로 성장하기를 갈구하는 모든 분들을 환영합니다. 👨‍👩‍👧‍👦🧡
    </>
  ),
  talent: [
    {
      id: 'web-talent-1',
      content: <>온/오프라인 가리지 않고 활발하게 소통하며 성실하게 참여할 사람</>,
    },
    {
      id: 'web-talent-2',
      content: <>웹 생태계에 관심이 많고, Javascript에 진심인 사람</>,
    },
    {
      id: 'web-talent-3',
      content: <>React를 사용해 프로젝트를 완수할 수 있는 기본 역량을 보유한 사람</>,
    },
    {
      id: 'web-talent-4',
      content: <>최신 웹 기술 동향 및 인사이트에 대해 공유하고 네트워킹하는 것을 좋아하는 사람</>,
    },
    {
      id: 'web-talent-5',
      content: <>책임감 있게 프로젝트를 끝까지 완수할 수 있는 사람</>,
    },
    {
      id: 'web-talent-6',
      content: <>할 땐 하고 놀 땐 노는, 웹팀에 좋은 영향력을 행사할 수 있는 사람</>,
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
      content: <>위 스터디 외에도 자유롭게 스터디 개설 가능</>,
    },
  ],
  interview: [
    {
      id: 'web-interview-1',
      content: '2월 4일 (토), 2월 5일(일)',
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
            <>Mash-Up 전체 세미나와 별도로 정기적인 온/오프라인을 통해 Web팀 세미나를 진행합니다!</>
          ),
        },
        {
          id: 'web-question-1-2',
          content: (
            <>
              번개 모각코나 모임이 많아요! 누구나 주최할 수 있고 참여할 수 있으니 원한다면 함께 해요
              🥹💛
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
              기본적으로 모든 구성원이 한 번씩 돌아가며 자유 주제로 기술 발표를 진행합니다. 이전에는
              OpenAPI Specification, stale-while-revalidate, Module Federation 등의 주제로 발표가
              진행됐었어요!
            </>
          ),
        },
        {
          id: 'web-question-2-2',
          content: (
            <>
              활동 중 블로그 포스팅도 함께 진행할 예정이에요! 관심있는 주제, 흥미로운 기술 동향 등에
              대한 글을 정리하고 공유하는 시간이 있을 예정입니다.
            </>
          ),
        },
        {
          id: 'web-question-2-3',
          content: (
            <>
              간단한 근황 공유와 각자 개발하면서 쌓은 경험이나 노하우, 공부했던 라이브러리 등을 함께
              이야기하며 공유하는 시간을 가져요! 이 외에도 개발과 관련된 주제라면 편하게
              공유해주세요. 나누면 배가 돼요ㅎㅎ
            </>
          ),
        },
        {
          id: 'web-question-2-4',
          content: (
            <>
              정기 세션이 끝나면 다함께 재미있고 유익한 액티비티나 다양한 활동을 할 예정이에요!
              선택적으로 참여하시면 됩니다.
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
              누구나 하고 싶은 스터디를 주최할 수 있으며, 구성원들이 자유롭게 참여하는 형태로 진행할
              계획입니다! 🥰
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
              프로젝트가 기본적으로 리액트를 사용해서 진행되기 때문에, 작은 프로젝트라도 진행해본
              경험이 있는 분을 우선해서 뽑을 예정입니다.
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
              대부분 실력있는 현직자들로 구성되어 있지만, 웹 분야를 열심히 공부하고 있는 학생도
              있어요! 지금 하고 있는 업무나 나이에 상관없이 웹에 대한 열정이 넘치는 분이라면 누구나
              함께할 수 있습니다~ 🎉
            </>
          ),
        },
        {
          id: 'web-question-5-2',
          content: (
            <>
              웹에 관심이 많고, 동아리 활동에 적극적으로 참여할 수 있는 열정 넘치는 분들을
              기다립니다! 🍺
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
