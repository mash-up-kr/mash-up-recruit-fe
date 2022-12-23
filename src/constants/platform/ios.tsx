import { FAQ_IOS_PAGE, RECRUIT_IOS_PAGE, APPLY_IOS_PAGE } from '@/constants';
import IOSLeftEmoji from '@/assets/svg/ios-left-emoji.svg';
import IOSRightEmoji from '@/assets/svg/ios-right-emoji.svg';

const ios = {
  id: 'ios',
  name: 'iOS',
  role: 'iOS Developer',
  path: {
    recruit: RECRUIT_IOS_PAGE,
    faq: FAQ_IOS_PAGE,
    apply: APPLY_IOS_PAGE,
  },
  hero: {
    color: '#F8F9FA',
    emojis: [IOSLeftEmoji, IOSRightEmoji],
  },
  introduction: (
    <>
      Mash-Up iOS 팀은 자유롭고 활기찬 분위기 속에서 정보와 지식을 공유하며 성장하는 네트워크를
      형성하는 것이 목표입니다. 학생부터 현직자까지 다양한 인원들이 활동하고 있으며, 서로에게 좋은
      자극이 되는 건강한 관계를 유지하고 있습니다. 함께 성장하며, 거리낌 없이 참여할 수 있는 열정
      가득한 iOS 개발자를 기다리고 있습니다. 고민은 지원을 늦출 뿐! 우리 iOS 팀은 여러분들의 많은
      지원과 관심을 기다리고 있습니다!
    </>
  ),
  talent: [
    {
      id: 'ios-talent-1',
      content: <>💻 온/오프라인을 가리지 않고 활발하게 참여하실 수 있는 분!</>,
    },
    {
      id: 'ios-talent-2',
      content: <>🎁 새로운 기술과 새로운 제품을 참지 못하시는 분!</>,
    },
    {
      id: 'ios-talent-3',
      content: <>🍺 남들과 어울려서 놀기 좋아하시는 분!</>,
    },
    {
      id: 'ios-talent-4',
      content: <>🔥 동아리에 확실한 목표를 가지고 적극적으로 활동하실 분!</>,
    },
    {
      id: 'ios-talent-5',
      content: <>🍎 iOS에 열정 넘치고 애플 아니면 안되는 사람!  (aka. 앱등이)</>,
    },
  ],
  study: [
    {
      id: 'ios-study-1',
      content: <>✨ 매주 화요일 8시부터 2시간 동안 iOS 세미나를 진행해요(10주간)</>,
    },
    {
      id: 'ios-study-2',
      content: (
        <>
          🔥 세미나에서는 각 팀 혹은 개인이 발표하는 시간과 그 주제를 가지고 얘기하는 시간을 가져요
        </>
      ),
    },
    {
      id: 'ios-study-3',
      content: <>👨‍👧‍👦 3명이 한 팀이 되어 공부하고, 함께 프로젝트를 진행해요</>,
    },
  ],
  interview: [
    {
      id: 'ios-interview-1',
      content: '🗓 2월 4일(토), 2월 5일(일)',
    },
    {
      id: 'ios-interview-2',
      content: '⏰ 오전 11시 ~ 오후 5시',
    },
  ],

  questions: [
    {
      id: 'ios-question-1',
      title: { emoji: '🏃‍♀️', text: 'iOS팀은 어떤 활동을 진행하나요?' },
      content: [
        {
          id: 'ios-question-1-1',
          content: <>이번 Mash-Up iOS는 3명이 한 팀이 되어 스터디 및 프로젝트를 진행합니다.</>,
        },
        {
          id: 'ios-question-1-2',
          content: (
            <>
              스터디는 3명이 함께 주제를 정하여 깊이있게 탐구해보는 시간입니다. 이렇게 공부한 주제를
              바탕으로 정해진 세미나 시간에 발표를 진행합니다.
            </>
          ),
        },
        {
          id: 'ios-question-1-3',
          content: (
            <>
              프로젝트는 다른 플랫폼과 함께하여 하나의 앱을 개발하는 과정입니다. 스터디를 통해
              공부해본 주제들을 프로젝트에 활용해볼 수 있습니다.
            </>
          ),
        },
        {
          id: 'ios-question-1-4',
          content: <>이외에도 여러 친목 활동과 네트워킹을 가지는 자리가 있습니다.</>,
        },
      ],
    },
    {
      id: 'ios-question-2',
      title: { emoji: '🧐', text: 'iOS로 개발해본 경험이 없이 지원해도 되나요?' },
      content: [
        {
          id: 'ios-question-2-1',
          content: (
            <>
              iOS 개발 자체를 따로 스터디하는 시간은 없기 때문에, 기본적으로 swift 및 iOS를 사용할
              줄 알아야합니다. 최소한 토이 프로젝트 하나를 완성해본 경험이 필요합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'ios-question-3',
      title: { emoji: '🛠', text: 'UIKit으로 개발하나요?' },
      content: [
        {
          id: 'ios-question-3-1',
          content: (
            <>
              프로젝트의 스펙은 스터디를 함께한 팀원들과 함께 상의 후 결정하게 됩니다. 그 동안
              활용해보고 싶었거나 새롭게 도전해보고 싶었던 기술들을 적용해볼 수 있습니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'ios-question-4',
      title: { emoji: '🫣', text: 'iOS 팀은 어떤 사람들이 모여있나요?' },
      content: [
        {
          id: 'ios-question-4-1',
          content: <>직장인 10명 (1~5년차), 학생 3명</>,
        },
        {
          id: 'ios-question-4-1',
          content: <>나이 : 22~32세</>,
        },
        {
          id: 'ios-question-4-1',
          content: <>iOS에 대한 열정이 넘치고 재밌는 사람들과 함께할 수 있어요</>,
        },
      ],
    },
    {
      id: 'ios-question-5',
      title: { emoji: '👨‍👧‍👦', text: '13기 iOS는 몇 명 뽑나요?' },
      content: [
        {
          id: 'ios-question-5-1',
          content: <>2~3명을 모집할 예정입니다.</>,
        },
      ],
    },
  ],
};

export default ios;
