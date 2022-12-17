import { APPLY_ANDROID_PAGE, FAQ_ANDROID_PAGE, RECRUIT_ANDROID_PAGE } from '@/constants';
import AndroidLeftEmoji from '@/assets/svg/android-left-emoji.svg';
import AndroidRightEmoji from '@/assets/svg/android-right-emoji.svg';

const android = {
  id: 'android',
  name: 'Android',
  role: 'Android Developer',
  path: {
    recruit: RECRUIT_ANDROID_PAGE,
    faq: FAQ_ANDROID_PAGE,
    apply: APPLY_ANDROID_PAGE,
  },
  hero: {
    color: '#77EDAD',
    emojis: [AndroidLeftEmoji, AndroidRightEmoji],
  },
  introduction: (
    <>
      Mash-Up 안드로이드팀은 세미나, 프로젝트, 스터디 등 여러 활동을 진행합니다.
      <br />
      학생부터 현업 직장인까지 다양한 연령대의 사람들이 모여 있으며 좋은 지식을 다 같이 공유하고
      성장하며 서로에게 자극이 되기도 하는 관계를 지향합니다.
      <br />
      개발 뿐만 아니라 안드로이드 개발이라는 같은 공통사 가진 좋은 사람들과 만날 수 있는 친목의 장이
      되기도 합니다.
      <br />
      안드로이드팀은 열정있는 안드로이드 개발자분들을 기다리고 있습니다!
    </>
  ),
  talent: [
    {
      id: 'android-talent-1',
      content: <>코틀린을 사용해서 안드로이드 프로젝트를 진행해보신 분</>,
    },
    {
      id: 'android-talent-2',
      content: <>기술적으로 풀기 어려운 문제를 공유해 함께 토론하고 해결해보고 싶으신 분</>,
    },
    {
      id: 'android-talent-3',
      content: <>스터디, 세미나, 코드리뷰 등 팀 활동에 적극적으로 참여할 수 있으신 분</>,
    },
    {
      id: 'android-talent-4',
      content: <>다양한 취미를 안드로이드 팀원과 함께 공유하고 즐기고 싶으신 분</>,
    },
    {
      id: 'android-talent-5',
      content: (
        <>
          수다쟁이 환영 <span style={{ fontFamily: 'Arial, sans-serif' }}>( ͡° ͜ʖ ͡°)</span>
        </>
      ),
    },
  ],
  study: [
    {
      id: 'android-study-1',
      content: <>Android Blog</>,
    },
    {
      id: 'android-study-2',
      content: <>Compose</>,
    },
    {
      id: 'android-study-3',
      content: <>Coroutine + Flow</>,
    },
    {
      id: 'android-study-4',
      content: (
        <>
          기타 여러분이 원하는 주제{' '}
          <span style={{ fontFamily: 'Arial, sans-serif' }}>(☞ ͡° ͜ʖ ͡°)☞</span>
        </>
      ),
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
      id: 'android-question-1',
      title: { text: '어떤 활동을 진행하나요?' },
      content: [
        {
          id: 'android-question-1-1',
          content: (
            <>
              Mash-Up 안드로이드 13기는 팀원들이 원하는 자율적인 주제로 여러개의 스터디가 개설되고
              진행됩니다. Compose, Coroutine 등 기술적인 스터디 이외에도 Mash-Up 안드로이드 팀
              Youtube 컨텐츠 제작이나, Android Weekly 번역 및 공유 등 가벼운 스터디도 진행될
              예정이에요! 뿐만아니라, 안드로이드 현업 개발자와의 만남 및 세미나도 계획되어있습니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'android-question-2',
      title: { text: '어느정도 안드로이드 개발을 할 줄 알아야 하나요?' },
      content: [
        {
          id: 'android-question-2-1',
          content: (
            <>
              안드로이드 팀에는 기본적으로 학생부터 직장인까지 열정 넘치는 분들은 누구나 참여
              가능합니다. 단, 앱을 출시하는 프로젝트를 동아리에서 진행하기 때문에 간단한 안드로이드
              토이 프로젝트라도 한 번 이상 진행해보신 분들을 뽑을 예정입니다! 또한, 코틀린으로
              프로젝트를 진행하기 때문에 코틀린을 능숙하진 않더라도 사용할 줄 알아야합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'android-question-3',
      title: { text: '프로젝트의 스펙은 어떻게 되나요?' },
      content: [
        {
          id: 'android-question-3-1',
          content: (
            <>
              프로젝트마다 팀원끼리 상의해서 스펙을 다르게 가져갑니다. 자신이 평소 사용해보고 싶었던
              라이브러리들을 사용해볼 수 있는 기회이면서 접해보지 못했던 스택들을 다른 팀원들과 함께
              사용해보면서 익힐 수 있는 기회가 되기도합니다.
            </>
          ),
        },
      ],
    },
  ],
};

export default android;
