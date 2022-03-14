import { FAQ_IOS_PAGE, RECRUIT_IOS_PAGE, APPLY_IOS_PAGE } from '@/constants';
import IOSLeftEmoji from '@/assets/svg/ios-left-emoji.svg';
import IOSRightEmoji from '@/assets/svg/ios-right-emoji.svg';

const ios = {
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
  talent: [
    {
      id: 'ios-talent-1',
      content: <>💻 온라인 모임에도 활발하게 참여하고 분위기를 즐겁게 같이 만들어가실 분!</>,
    },
    {
      id: 'ios-talent-2',
      content: <>🥳 새로운 기술을 배우는 걸 좋아하고 남들과 공유하는 걸 즐기시는 분!</>,
    },
    {
      id: 'ios-talent-3',
      content: <>🍎 iOS에 열정 넘치고 애플 아니면 안되는 사람!  (aka. 앱등이)</>,
    },
    {
      id: 'ios-talent-4',
      content: <>🔥 동아리에 확실한 목표를 가지고 적극적으로 활동하실 분!</>,
    },
    {
      id: 'ios-talent-5',
      content: <>🍺 술은 못마셔도 남들과 어울리기 좋아하는 분!</>,
    },
  ],
  study: [
    {
      id: 'ios-study-1',
      content: <>✨ 1대1(멘토/멘티)로 팀을 나눠 내가 관심있는 주제를 선정해요</>,
    },
    {
      id: 'ios-study-2',
      content: <>🔥 매주 돌아가며 내가 선정하여 공부한 주제를 발표하는 시간이 있어요</>,
    },
    {
      id: 'ios-study-3',
      content: <>🍎 WWDC (원하는 사람에 한해)</>,
    },
  ],
  interview: [
    {
      id: 'ios-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'ios-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  introduction: (
    <>
      Mash-Up iOS 팀은 자유롭고 활기찬 분위기 속에서 정보와 지식을 공유하며 성장하는 네트워크를
      형성하는 것이 목표입니다. 학생부터 현직자까지 다양한 인원들이 활동하고 있으며, 서로에게 좋은
      자극이 되는 건강한 관계를 유지하고 있습니다. 함께 성장하기에 거리낌 없이 참여할 수 있는 열정
      가득한 iOS 개발자를 기다리고 있습니다. 고민은 지원을 늦출 뿐! 우리 iOS 팀은 여러분들의 많은
      지원과 관심을 기다리고 있습니다!
    </>
  ),
  questions: [
    {
      id: 'ios-question-1',
      title: { emoji: '🙋🏻', text: 'iOS 어느 정도 개발해야 지원할 수 있나요?' },
      content: [
        {
          id: 'ios-question-1-1',
          content: (
            <>
              매쉬업은 학생부터 직장인까지 누구나 참여 가능합니다. iOS 개발자 또한 시작한 지 얼마 안
              된 사람부터 오랫동안 개발해온 사람 모두 환영합니다. 다만 동아리에서 앱을 출시하는
              프로젝트를 진행하기 때문에 간단하게 화면을 만들 수 있어야 합니다. 물론 UIKit을 통해서
              한 번이라도 앱을 만들어 실행해본 사람이라면 충분합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'ios-question-2',
      title: { emoji: '💑', text: '멘토 / 멘티 프로그램은 어떻게 진행되나요?' },
      content: [
        {
          id: 'ios-question-2-1',
          content: (
            <>
              리드 / 미들급의 멘토와 주니어, 학생으로 이루어진 멘티가 공통으로 관심있어 하는 주제를
              기반으로 매칭할 예정입니다. 이후 멘토와 멘티는 주제를 가지고 스터디를 하거나, 작성한
              코드에 대해 코드리뷰도 받을 수 있습니다. 멘토는 멘토링 경험을 바탕으로, 멘티는
              스터디나 코드리뷰를 바탕으로 멘토와 멘티 모두 성장 할 수 있는 프로그램이 될 것
              같습니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'ios-question-3',
      title: { emoji: '📚', text: '스터디는 어떻게 진행되나요?' },
      content: [
        {
          id: 'ios-question-3-1',
          content: (
            <>
              이번 iOS팀의 스터디는 매주 화요일(8시 ~ 10시) 2시간 동안 진행됩니다.
              <br />
              멘토 / 멘티가 짝을 이뤄 공부하거나 토의 했던 내용에 대해 세미나를 진행하는 형태로 될
              예정입니다. 각 팀마다 스터디하고 싶은 주제(iOS, HIG, Swift, SwiftUI, Combine, RxSwift,
              Concurrency 등)를 선정할 수 있으며
              <br />
              다채로운 주제의 세미나를 통해 학생과 직장인 모두 성장 할 수 있는 기회를 만들고자
              합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'ios-question-4',
      title: { emoji: '🛠', text: '프로젝트 진행시 개발의 스펙은 어떻게 되나요?' },
      content: [
        {
          id: 'ios-question-4-1',
          content: (
            <>
              다양한 사람들이 모여있는 만큼 때문에 특정 스펙에 의존하지 않습니다. 실제 프로젝트를
              진행함에 있어서도 각 팀별로 아키텍처가 다양하고, 새로운 프레임워크나 여러
              라이브러리들을 활용하고 있습니다. 자신이 사용해보고 싶었던 것들을 사용해볼 수 있는
              기회이면서 여러 사람들과 함께 사용해보면서 익힐 수 있는 기회가 되기도 합니다.
            </>
          ),
        },
      ],
    },
  ],
};

export default ios;
