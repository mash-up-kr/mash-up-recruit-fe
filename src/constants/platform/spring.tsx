import { FAQ_SPRING_PAGE, RECRUIT_SPRING_PAGE, APPLY_SPRING_PAGE } from '@/constants';
import SpringLeftEmoji from '@/assets/svg/spring-left-emoji.svg';
import SpringRightEmoji from '@/assets/svg/spring-right-emoji.svg';

const spring = {
  id: 'spring',
  name: 'Spring',
  role: 'Backend Developer',
  path: {
    recruit: RECRUIT_SPRING_PAGE,
    faq: FAQ_SPRING_PAGE,
    apply: APPLY_SPRING_PAGE,
  },
  hero: {
    color: '#0E3932',
    emojis: [SpringLeftEmoji, SpringRightEmoji],
  },
  talent: [
    {
      id: 'spring-talent-1',
      content: <>스프링 프로젝트 경험이 있으신 분</>,
    },
    {
      id: 'spring-talent-2',
      content: <>공동의 성장을 위해 적극적으로 참여하고 소통하는 분</>,
    },
    {
      id: 'spring-talent-3',
      content: <>팀 활동에 책임감을 가지고 끝까지 완수하는 태도를 가지신 분</>,
    },
    {
      id: 'spring-talent-4',
      content: <>자기주도적인 자세로 개발 공부 및 활동을 하시는 분</>,
    },
  ],
  study: [
    {
      id: 'spring-study-1',
      content: (
        <>
          스프링 프로젝트
          <a href="https://spring.io/projects" style={{ textDecoration: 'underline' }}>
            (https://spring.io/projects)
          </a>{' '}
          하나씩 적용
        </>
      ),
    },
    {
      id: 'spring-study-2',
      content: <>유튜브, 블로그, 책 등 다양한 소스를 통한 기술 세미나 및 토론</>,
    },
    {
      id: 'spring-study-3',
      content: <>플랫폼 단위 스터디와 소규모 스터디 (주제는 함께 정해요!)</>,
    },
  ],
  interview: [
    {
      id: 'spring-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'spring-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  introduction: (
    <>
      안녕하세요! 모든 일(개발, 놀기)에 진심인 사람들이 모인 스프링 팀입니다.
      <br />
      저희 팀에서는 “왜?”라는 의문을 던지고 그에 대한 해답을 찾기위해 노력합니다. “왜 이 기술을
      사용하지?”, “왜 이렇게 구성을 해야하는 거지?” 라는 질문들에 답하기 위해선 탄탄한 기본기와
      개발에 대한 열정은 필수적이며, 여러가지 활동을 통해 이를 성장시키고 최종적으로는 여러가지
      상황에서도 대처 가능한 개발자가 되는 것을 목표로 하고 있습니다.
      <br />
      또, 혼자만의 성장이 아닌 전체적인 성장을 추구하고 좋은 팀원은 무엇이고 어떻게 하면 더 좋은
      팀을 만들 수 있을지 등을 여러 활동을 통해 익히며 이를 실무에서도 적용할 수 있도록 노력하고
      있습니다.
    </>
  ),
  questions: [
    {
      id: 'spring-question-1',
      title: { text: '프레임워크와 언어는 무엇을 사용하나요?' },
      content: [
        {
          id: 'spring-question-1-1',
          content: <>프레임워크는 당연히 스프링을 사용해요. 우리는 스프링 팀이니까요! 🌱</>,
        },
        {
          id: 'spring-question-1-2',
          content: <>언어는 코틀린과 자바를 사용합니다.</>,
        },
      ],
    },
    {
      id: 'spring-question-2',
      title: { text: '스프링팀 모임이나 세미나는 어떻게 진행되나요?' },
      content: [
        {
          id: 'spring-question-2-1',
          content: (
            <>한달에 2-3번 정도로, 전체 세미나가 없는 격주 토요일마다 플랫폼 세미나를 진행해요!</>
          ),
        },
        {
          id: 'spring-question-2-2',
          content: <>코로나 이슈로 Zoom이나 Discord를 통해 온라인 모임을 합니다. 😷</>,
        },
        {
          id: 'spring-question-2-3',
          content: (
            <>
              근황 토크를 시작으로 기술 세미나와 토론 및 스터디를 진행해요.
              <br />
              또한, 경험해본 기술이나 겪었던 이슈에 대해 공유하며 다양한 이야기를 나눠요.
            </>
          ),
        },
        {
          id: 'spring-question-2-4',
          content: (
            <>
              방역수칙을 준수한 오프라인 모임도 진행할 예정입니다. 공부도 공부지만 회식을 좋아해요.
              🍺
            </>
          ),
        },
      ],
    },
    {
      id: 'spring-question-3',
      title: { text: '스터디 진행방식은 어떻게 되나요?' },
      content: [
        {
          id: 'spring-question-3-1',
          content: <>플랫폼 단위 스터디와 소규모로 진행되는 스터디가 있어요.</>,
        },
        {
          id: 'spring-question-3-2',
          content: '플랫폼 단위 스터디',
          subItems: [
            {
              id: 'spring-question-3-2-1',
              content: <>정기 세미나 시간에 진행합니다.</>,
            },
            {
              id: 'spring-question-3-2-2',
              content: (
                <>
                  12기에는 “스프링 프로젝트(
                  <a href="https://spring.io/projects" style={{ textDecoration: 'underline' }}>
                    https://spring.io/projects
                  </a>
                  )” 스터디를 진행할 예정이에요.
                  <br />
                  (지난 11기에는 “코틀린 인 액션” 스터디를 진행하였습니다.)
                </>
              ),
            },
          ],
        },
        {
          id: 'spring-question-3-3',
          content: '소규모 스터디',
          subItems: [
            {
              id: 'spring-question-3-3-1',
              content: <>정기 세미나 시간과는 별개로 진행됩니다.</>,
            },
            {
              id: 'spring-question-3-3-2',
              content: (
                <>
                  12기에 진행할 스터디 주제는 수요조사 이후 정해질 예정이에요.
                  <br />
                  (지난 11기에 진행한 스터디로는 JPA, AWS, k8s, TDD가 있습니다.)
                </>
              ),
            },
            {
              id: 'spring-question-3-3-3',
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
      id: 'spring-question-4',
      title: { text: '스프링을 얼마나 알아야 지원할 수 있을까요?' },
      content: [
        {
          id: 'spring-question-4-1',
          content: (
            <>
              원활한 프로젝트, 세미나 진행과 기존 인원과의 실력차를 고려하여 스프링을 이용해 간단한
              프로젝트라도 경험해보신 분을 모시려고 합니다.
            </>
          ),
        },
        {
          id: 'spring-question-4-2',
          content: (
            <>
              물론 스프링에 대한 지식이 부족해도 괜찮아요. 😊
              <br />
              단, 의존적인 자세보다는 주도적인 자세를 가진 분이시면 좋겠어요!
            </>
          ),
        },
        {
          id: 'spring-question-4-3',
          content: (
            <>
              언어는 코틀린 혹은 자바로 진행할 것이기 때문에 해당 언어를 다뤄보신 경험이 있으신 분을
              우대하고 있어요!
            </>
          ),
        },
      ],
    },
    {
      id: 'spring-question-5',
      title: { text: '프로젝트 진행을 하게 되면 서버는 무엇을 하나요?' },
      content: [
        {
          id: 'spring-question-5-1',
          content: <>Client, Design, Server가 한 팀이 되어 프로젝트를 진행합니다.</>,
        },
        {
          id: 'spring-question-5-2',
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
      id: 'spring-question-6',
      title: { text: '직장인 혹은 학생 지원 가능한가요?' },
      content: [
        {
          id: 'spring-question-6-1',
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
          id: 'spring-question-6-2',
          content: <>직장인</>,
          subItems: [
            {
              id: 'spring-question-6-2-1',
              content: <>일과 함께 동아리 활동을 병행하여 빠지지 않고 참여할 수 있는 분</>,
            },
            {
              id: 'spring-question-6-2-2',
              content: <>프로젝트, 스터디 진행에 적극적인 참여가 가능하신 분</>,
            },
          ],
        },
        {
          id: 'spring-question-6-3',
          content: <>학생</>,
          subItems: [
            {
              id: 'spring-question-6-3-1',
              content: <>부족한 부분을 스스로 공부하고 적극적으로 질문할 수 있는 분</>,
            },
            {
              id: 'spring-question-6-3-2',
              content: <>경험이 많지 않더라도 도전정신을 갖고 열심히 참여하실 분</>,
            },
          ],
        },
      ],
    },
  ],
};
export default spring;
