import { FaqLayout, FaqHeader, SideNavigation, QuestionList, ModalNavigation } from '@/components';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Question } from '@/components/faq/QuestionList/QuestionList.component';
import { useDetectViewPort } from '@/hooks';
import { VIEWPORT_SIZE } from '@/constants';
import { PlatformKey } from '@/components/faq/Navigation/Navigation.component';

const questionsMap: Record<PlatformKey, { questions: Question[] }> = {
  common: {
    questions: [{ id: 'common-1', title: '공통 질문 - 0', content: [] }],
  },
  node: {
    questions: [
      {
        id: 'node-1',
        title: '노드팀은 무엇을 하나요?',
        content: [
          {
            id: 'node-1-1',
            content: (
              <>스터디로 함께 공부하고 기술적인 논의를 진행하며, 다 같이 공유하고 성장합니다.</>
            ),
          },
          {
            id: 'node-1-2',
            content: <>온/오프라인 모각코(모여서 각자 코딩)로 정기적으로 모이며 친목을 다집니다.</>,
          },
          {
            id: 'node-1-3',
            content: (
              <>
                스터디로만 끝나는 공부는 그만! 실력 있는 프론트엔드 개발자와 디자이너와 함께 멋진
                프로젝트를 진행합니다.
              </>
            ),
          },
          {
            id: 'node-1-4',
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
        id: 'node-2',
        title: '스터디 진행방식은 어떻게 되나요?',
        content: [
          {
            id: 'node-2-1',
            content: <>공식 문서로 빠르게 기술 스터디를 진행합니다. (무거운 책 No No)</>,
          },
          {
            id: 'node-2-2',
            content: (
              <>
                로컬 서버만으로 끝나지 않고 도커, 쿠버네티스 기반의 실제 배포 파이프라인을 함께
                만들어봅니다.
              </>
            ),
          },
          {
            id: 'node-2-3',
            content: <>지식이 머리 속 이론에서 그치지 않게 기업 온보딩 과제를 실습을 합니다.</>,
          },
          {
            id: 'node-2-4',
            content: <>10분 세미나로 새로운 기술을 찍먹하고 팀원들에게 소개합니다.</>,
          },
          {
            id: 'node-2-5',
            content: <>매 주 토요일 낮 시간대에 진행합니다. ← 시간 정해지면 추후 변경</>,
          },
        ],
      },
      {
        id: 'node-3',
        title: '노드에 대해 얼마나 알아야 지원할 수 있나요?',
        content: [
          {
            id: 'node-3-1',
            content: (
              <>
                노드를 따로 스터디하는 시간이 없기 때문에, 기본적으로 자바스크립트 및 노드를
                사용해본 경험이 있어야합니다!
              </>
            ),
          },
          {
            id: 'node-3-2',
            content: (
              <>
                NestJS 프레임워크를 사용하기 때문에 필수적인 건 아니지만, Express와 같은 서버
                경험이나 타입스크립트 사용 경험이 있으면 스터디하기가 더 편할거에요.
              </>
            ),
          },
        ],
      },
    ],
  },
  design: {
    questions: [
      {
        id: 'design-1',
        title: '🙋‍♀️ 디자인팀은 무엇을 하나요?',
        content: [
          {
            id: 'design-1-1',
            content: <>디자인팀 세미나</>,
            subItems: [
              {
                id: 'design-1-1',
                content: (
                  <>
                    격주로 진행되며 디자인 팀원들이 모두 모여 디자인 이슈, 트렌드에 관한 정보를
                    공유하는 시간을 가집니다
                  </>
                ),
              },
            ],
          },
          {
            id: 'design-1-2',
            content: <>스터디</>,
            subItems: [
              {
                id: 'design-1-2-1',
                content: (
                  <>
                    팀원들의 합의에 따라 다양한 분야의 디자인 스터디를 진행하게됩니다.
                    <br />
                    비슷한 관심사를 가진 디자이너들과 스터디를 꾸려 개개인의 성장을 도모합니다.
                  </>
                ),
              },
            ],
          },
          {
            id: 'design-1-3',
            content: <>프로젝트 팀 활동</>,
            subItems: [
              {
                id: 'design-1-3-1',
                content: (
                  <>
                    개발팀과 함께 기획의 시간을 가진 뒤, 협업을 진행하며 서비스 하나를 완성시키는
                    것이 목표입니다.
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'design-2',
        title: '🙋‍♀️ 디자인팀 에서는 어떤 스터디를 하나요? ',
        content: [
          {
            id: 'design-2-1',
            content: (
              <>
                매 기수마다 선호도에 따라 진행하는 스터디가 다를 수 있습니다. 팀원들이 스터디하고자
                하는 새로운 주제가 있다면, 자유롭게 스터디를 만들 수 있어요! 지난 11기 때는 팀원들의
                관심사를 바탕으로 포트폴리오, 데이터 분석, 웹 스터디 등을 진행하였으니 참고
                부탁드립니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'design-3',
        title: '🙋‍♀️ 디자인 할때 주로 어떤 툴을 주로 사용하나요?',
        content: [
          {
            id: 'design-3-1',
            content: (
              <>
                Figma, Sketch,XD 등 프로토 타이핑 툴을 주로 사용합니다. 프로젝트 팀 진행에서는
                개발자와의 협업을 위해 Zeplin을 활용하기도 해요. 개개인이 많이 사용하는 익숙한 툴을
                사용해 주로 작업합니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'design-4',
        title: '🙋‍♂️ 꼭 프로덕트(UX/UI) 디자인 관련 과를 전공해야하나요?',
        content: [
          {
            id: 'design-4-1',
            content: (
              <>
                아니요! 매쉬업에서는 프로덕트 디자인에 관심있는 사람이라면 환영입니다. 다만,
                프로덕트 디자인에 대한 기본적인 이해도가 없다면 협업할 때 버거울 수 있다 생각합니다.
                꾸준히 부족함을 채우기 위해 노력하는 열정과, 책임감을 가지고 있다면 충분하다
                생각합니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'design-5',
        title: '🙋‍♀️  포트폴리오를 웹 url로 제출해도 되나요?',
        content: [
          {
            id: 'design-5-1',
            content: (
              <>네 가능합니다. 지원서 제출 시 pdf에 링크를 첨부하여 제출해주시면 됩니다 :)</>
            ),
          },
        ],
      },
    ],
  },
  ios: {
    questions: [
      {
        id: 'ios-1',
        title: '🙋🏻 iOS 어느 정도 개발해야 지원할 수 있나요?',
        content: [
          {
            id: 'ios-1-1',
            content: (
              <>
                매쉬업은 학생부터 직장인까지 누구나 참여 가능합니다. iOS 개발자 또한 시작한 지 얼마
                안 된 사람부터 오랫동안 개발해온 사람 모두 환영합니다. 다만 동아리에서 앱을 출시하는
                프로젝트를 진행하기 때문에 간단하게 화면을 만들 수 있어야 합니다. 물론 UIKit을
                통해서 한 번이라도 앱을 만들어 실행해본 사람이라면 충분합니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'ios-2',
        title: '💑  멘토 / 멘티 프로그램은 어떻게 진행되나요?',
        content: [
          {
            id: 'ios-2-1',
            content: (
              <>
                리드 / 미들급의 멘토와 주니어, 학생으로 이루어진 멘티가 공통으로 관심있어 하는
                주제를 기반으로 매칭할 예정입니다. 이후 멘토와 멘티는 주제를 가지고 스터디를 하거나,
                작성한 코드에 대해 코드리뷰도 받을 수 있습니다. 멘토는 멘토링 경험을 바탕으로,
                멘티는 스터디나 코드리뷰를 바탕으로 멘토와 멘티 모두 성장 할 수 있는 프로그램이 될
                것 같습니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'ios-3',
        title: '📚  스터디는 어떻게 진행되나요?',
        content: [
          {
            id: 'ios-3-1',
            content: (
              <>
                이번 iOS팀의 스터디는 매주 화요일(8시 ~ 10시) 2시간 동안 진행됩니다.
                <br />
                멘토 / 멘티가 짝을 이뤄 공부하거나 토의 했던 내용에 대해 세미나를 진행하는 형태로 될
                예정입니다. 각 팀마다 스터디하고 싶은 주제(iOS, HIG, Swift, SwiftUI, Combine,
                RxSwift, Concurrency 등)를 선정할 수 있으며
                <br />
                다채로운 주제의 세미나를 통해 학생과 직장인 모두 성장 할 수 있는 기회를 만들고자
                합니다.
              </>
            ),
          },
        ],
      },
      {
        id: 'ios-4',
        title: '🛠  프로젝트 진행시 개발의 스펙은 어떻게 되나요?',
        content: [
          {
            id: 'ios-4-1',
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
  },
  web: {
    questions: [
      {
        id: 'web-1',
        title: '웹팀은 주로 어떤 활동을 하나요?',
        content: [
          {
            id: 'web-1-1',
            content: <>전체 세미나가 없는 격주 토요일마다 플랫폼 세미나를 진행합니다 😄</>,
          },
          {
            id: 'web-1-2',
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
        id: 'web-2',
        title: '세미나 진행은 어떻게 되나요?',
        content: [
          {
            id: 'web-2-1',
            content: (
              <>
                간단한 근황 공유와 각자 개발하면서 쌓은 경험이나 노하우, 기술들을 함께 이야기하며
                공유하는 Tech talk💬 시간을 가져요! 여러분이 공부했던 라이브러리나 그 외 개발관련
                어떤 주제든 공유하고 싶은것이 있다면 나눠주세요. 나누면 배가되요~
              </>
            ),
          },
          {
            id: 'web-2-2',
            content: (
              <>
                웹 구성원들이 번갈아가며 자유로운 주제로 발표를 진행해요. 이전에는 함수형
                프로그래밍, ReactQuery, GraphQL등의 주제로 발표가 진행됐었어요 ✌️
              </>
            ),
          },
        ],
      },
      {
        id: 'web-3',
        title: '스터디 진행은 어떻게 되나요?',
        content: [
          {
            id: 'web-3-1',
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
        id: 'web-4',
        title: '리액트를 잘 몰라도 괜찮을까요?',
        content: [
          {
            id: 'web-4-1',
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
        id: 'web-5',
        title: '웹 팀은 어떤 사람들이 모여있나요?',
        content: [
          {
            id: 'web-5-1',
            content: (
              <>
                웹 개발자로 일을 하고 있는 직장인도 있구요, 웹 분야를 열심히 공부하는 대학생들도
                있어요! 지금 하고 있는 일이나 나이 상관없이 웹에 대한 열정이 넘치는 사람들과 함께할
                수 있어요~ 🎉
              </>
            ),
          },
          {
            id: 'web-5-2',
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
        id: 'web-6',
        title: '웹 팀의 목표는 무엇인가요?',
        content: [
          {
            id: 'web-6-1',
            content: (
              <>프로젝트를 성공적으로 배포해서 성취감을 느낄 수 있는 동아리를 만들고 싶어요!</>
            ),
          },
          {
            id: 'web-6-2',
            content: (
              <>
                혼자만 알기보단 다같이 공유하고 개발적으로 어려운 부분이 있다면 함께 해결해가고
                싶어요. 우린 팀이니까요☺️
              </>
            ),
          },
          {
            id: 'web-6-3',
            content: (
              <>
                동아리 활동을 하면서 원하는 목표도 같이 이뤘으면 좋겠어요! 지난 기수에는 취업/이직을
                목표로 하는 분들이 많았는데 목표를 이루신 분들이 많았습니다 :D
              </>
            ),
          },
          {
            id: 'web-6-4',
            content: <>재미있고 함께 성장하는 매쉬업의 구성원이 되어주세요!</>,
          },
          {
            id: 'web-6-5',
            content: <>웹 팀 뿐만 아니라 다양한 분야의 실력있는 사람들과 좋은 관계를 만들어요</>,
          },
        ],
      },
    ],
  },
  android: {
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
                가능합니다. 단, 앱을 출시하는 프로젝트를 동아리에서 진행하기 때문에 간단한
                안드로이드 토이 프로젝트라도 한 번 이상 진행해본 사람을 뽑을 예정입니다! 또한,
                기본적으로 코틀린으로 프로젝트를 진행하기 때문에 코틀린을 능숙하진 않더라도 사용할
                줄 알아야 합니다.
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
                프로젝트마다 팀원끼리 상의해서 스펙을 다르게 가져갑니다. 자신이 평소 사용해보고
                싶었던 라이브러리들을 사용해볼 수 있는 기회이면서 접해보지 못했던 스택들을 다른
                팀원들과 함께 사용해보면서 익힐 수 있는 기회가 되기도 합니다.
              </>
            ),
          },
        ],
      },
    ],
  },
  spring: {
    questions: [
      {
        id: 'spring-1',
        title: '프레임워크와 언어는 무엇을 사용하나요?',
        content: [
          {
            id: 'spring-1-1',
            content: <>프레임워크는 당연히 스프링을 사용해요. 우리는 스프링 팀이니까요! 🌱</>,
          },
          {
            id: 'spring-1-2',
            content: <>언어는 코틀린과 자바를 사용합니다.</>,
          },
        ],
      },
      {
        id: 'spring-2',
        title: '스프링팀 모임이나 세미나는 어떻게 진행되나요?',
        content: [
          {
            id: 'spring-2-1',
            content: (
              <>한달에 2-3번 정도로, 전체 세미나가 없는 격주 토요일마다 플랫폼 세미나를 진행해요!</>
            ),
          },
          {
            id: 'spring-2-2',
            content: <>코로나 이슈로 Zoom이나 Discord를 통해 온라인 모임을 합니다. 😷</>,
          },
          {
            id: 'spring-2-3',
            content: (
              <>
                근황 토크를 시작으로 기술 세미나와 토론 및 스터디를 진행해요.
                <br />
                또한, 경험해본 기술이나 겪었던 이슈에 대해 공유하며 다양한 이야기를 나눠요.
              </>
            ),
          },
          {
            id: 'spring-2-4',
            content: (
              <>
                방역수칙을 준수한 오프라인 모임도 진행할 예정입니다. 공부도 공부지만 회식을
                좋아해요. 🍺
              </>
            ),
          },
        ],
      },
      {
        id: 'spring-3',
        title: '스터디 진행방식은 어떻게 되나요?',
        content: [
          {
            id: 'spring-3-1',
            content: <>플랫폼 단위 스터디와 소규모로 진행되는 스터디가 있어요.</>,
          },
          {
            id: 'spring-3-2',
            content: '플랫폼 단위 스터디',
            subItems: [
              {
                id: 'spring-3-2-1',
                content: <>정기 세미나 시간에 진행합니다.</>,
              },
              {
                id: 'spring-3-2-2',
                content: (
                  <>
                    12기에는 “스프링 프로젝트(
                    <a href="https://spring.io/projects">https://spring.io/projects</a>)” 스터디를
                    진행할 예정이에요.
                    <br />
                    (지난 11기에는 “코틀린 인 액션” 스터디를 진행하였습니다.)
                  </>
                ),
              },
            ],
          },
          {
            id: 'spring-3-3',
            content: '소규모 스터디',
            subItems: [
              {
                id: 'spring-3-3-1',
                content: <>정기 세미나 시간과는 별개로 진행됩니다.</>,
              },
              {
                id: 'spring-3-3-2',
                content: (
                  <>
                    12기에 진행할 스터디 주제는 수요조사 이후 정해질 예정이에요.
                    <br />
                    (지난 11기에 진행한 스터디로는 JPA, AWS, k8s, TDD가 있습니다.)
                  </>
                ),
              },
              {
                id: 'spring-3-3-3',
                content: (
                  <>
                    진행 방식이나 시간, 모임 장소(온라인도 가능!)는 같이 하는 스터디원들과 정하면
                    됩니다.
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'spring-4',
        title: '스프링을 얼마나 알아야 지원할 수 있을까요?',
        content: [
          {
            id: 'spring-4-1',
            content: (
              <>
                원활한 프로젝트, 세미나 진행과 기존 인원과의 실력차를 고려하여 스프링을 이용해
                간단한 프로젝트라도 경험해보신 분을 모시려고 합니다.
              </>
            ),
          },
          {
            id: 'spring-4-2',
            content: (
              <>
                물론 스프링에 대한 지식이 부족해도 괜찮아요. 😊
                <br />
                단, 의존적인 자세보다는 주도적인 자세를 가진 분이시면 좋겠어요!
              </>
            ),
          },
          {
            id: 'spring-4-3',
            content: (
              <>
                언어는 코틀린 혹은 자바로 진행할 것이기 때문에 해당 언어를 다뤄보신 경험이 있으신
                분을 우대하고 있어요!
              </>
            ),
          },
        ],
      },
      {
        id: 'spring-5',
        title: '프로젝트 진행을 하게 되면 서버는 무엇을 하나요?',
        content: [
          {
            id: 'spring-5-1',
            content: <>Client, Design, Server가 한 팀이 되어 프로젝트를 진행합니다.</>,
          },
          {
            id: 'spring-5-2',
            content: (
              <>
                프로젝트 팀에서 정한 서비스에 따라 다양한 성격의 서버(API, Auth, Chatting, Batch,
                Crawling...)를 만들 수도 있어요.
              </>
            ),
          },
        ],
      },
      {
        id: 'spring-6',
        title: '직장인 혹은 학생 지원 가능한가요?',
        content: [
          {
            id: 'spring-6-1',
            content: (
              <>
                저희 매쉬업은 직장인과 학생 구분 없이 활동할 수 있어요!
                <br />
                서버 개발 시 경험하지 못한 영역에 대하여 도전적으로 개발 할 수 있는 분이면 지원
                가능합니다.
              </>
            ),
          },
          {
            id: 'spring-6-2',
            content: <>직장인</>,
            subItems: [
              {
                id: 'spring-6-2-1',
                content: <>일과 함께 동아리 활동을 병행하여 빠지지 않고 참여할 수 있는 분</>,
              },
              {
                id: 'spring-6-2-2',
                content: <>프로젝트, 스터디 진행에 적극적인 참여가 가능하신 분</>,
              },
            ],
          },
          {
            id: 'spring-6-3',
            content: <>학생</>,
            subItems: [
              {
                id: 'spring-6-3-1',
                content: <>부족한 부분을 스스로 공부하고 적극적으로 질문할 수 있는 분</>,
              },
              {
                id: 'spring-6-3-2',
                content: <>경험이 많지 않더라도 도전정신을 갖고 열심히 참여하실 분</>,
              },
            ],
          },
        ],
      },
    ],
  },
};

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface PlatformProps {
  platformName: PlatformKey;
}

const Platform: NextPage<PlatformProps> = ({ platformName }) => {
  const { size } = useDetectViewPort();
  const { questions } = questionsMap[platformName];
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
