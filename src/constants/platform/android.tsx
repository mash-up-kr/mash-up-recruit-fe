import { APPLY_ANDROID_PAGE, FAQ_ANDROID_PAGE, RECRUIT_ANDROID_PAGE } from '@/constants';

const android = {
  name: 'Android',
  role: 'Android Developer',
  path: {
    recruit: RECRUIT_ANDROID_PAGE,
    faq: FAQ_ANDROID_PAGE,
    apply: APPLY_ANDROID_PAGE,
  },
  introduction: (
    <>
      Mash-Up 안드로이드팀은 세미나, 프로젝트, 스터디 등 여러 활동을 진행합니다.
      <br />
      학생부터 현업 직장인까지 다양한 연령대의 사람들이 모여 있으며 좋은 지식을 다 같이 공유하고
      성장하며 서로에게 자극이 되기도 하는 관계를 지향합니다. 개발 뿐만 아니라 안드로이드 개발이라는
      같은 공통사 가진 좋은 사람들과 만날 수 있는 친목의 장이 되기도 합니다.
      <br />
      안드로이드팀은 열정있는 안드로이드 개발자분들을 기다리고 있습니다!
    </>
  ),
  talent: [
    {
      id: 'android-talent-1',
      content: <>사람들과 잘 놀 줄 알고 잘 어울리는분</>,
    },
    {
      id: 'android-talent-2',
      content: <>스터디와 세미나 진행에 적극적으로 참여 가능한 분</>,
    },
    {
      id: 'android-talent-3',
      content: <>코틀린을 사용해서 안드로이드 프로젝트를 만들어 보신 분</>,
    },
    {
      id: 'android-talent-4',
      content: <>다른 분야 (디자인, 백엔드, etc)와 함께 프로젝트 경험이 있는 분</>,
    },
    {
      id: 'android-talent-5',
      content: <>친목과 공부를 모두 챙기고 싶은 열정이 가득하신 분</>,
    },
  ],
  study: [
    {
      id: 'android-study-1',
      content: <>MVVM & Coroutine</>,
    },
    {
      id: 'android-study-2',
      content: <>Compose</>,
    },
    {
      id: 'android-study-3',
      content: <>Android Weekly & Google IO</>,
    },
  ],
  interview: [
    {
      id: 'android-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'android-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  questions: [
    {
      id: 'android-1',
      title: '어떤 활동을 진행하나요?',
      content: [
        {
          id: 'android-1-1',
          content: (
            <>
              이번 Mash-UP 안드로이드 12기는 세미나, 프로젝트, 스터디 등 다양한 활동으로
              이루어집니다. MVVM & Coroutine 관련 기본 스터디를 짧게 진행한 뒤 Compose 스터디를
              진행할 계획입니다. 이외에도 관심있는 주제에 대해 세미나를 진행하고, Android Weekly,
              Google IO 등을 함께 보고 이야기를 나눌 예정입니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'android-2',
      title: '어느정도 안드로이드 개발을 할 줄 알아야 하나요?',
      content: [
        {
          id: 'android-2-1',
          content: (
            <>
              안드로이드 팀에는 기본적으로 학생부터 직장인까지 열정 넘치는 분들은 누구나 참여
              가능합니다. 단, 앱을 출시하는 프로젝트를 동아리에서 진행하기 때문에 간단한 안드로이드
              토이 프로젝트라도 한 번 이상 진행해본 사람을 뽑을 예정입니다! 또한, 기본적으로
              코틀린으로 프로젝트를 진행하기 때문에 코틀린을 능숙하진 않더라도 사용할 줄 알아야
              합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'android-3',
      title: '프로젝트의 스펙은 어떻게 되나요?',
      content: [
        {
          id: 'android-3-1',
          content: (
            <>
              프로젝트마다 팀원끼리 상의해서 스펙을 다르게 가져갑니다. 자신이 평소 사용해보고 싶었던
              라이브러리들을 사용해볼 수 있는 기회이면서 접해보지 못했던 스택들을 다른 팀원들과 함께
              사용해보면서 익힐 수 있는 기회가 되기도 합니다.
            </>
          ),
        },
      ],
    },
  ],
};

export default android;
