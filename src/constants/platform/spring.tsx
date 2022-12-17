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
  introduction: (
    <>
      Mash-Up의 열정의 Spring 팀은 학생부터 현직자까지 다양한 인원이 모여 활동하고 있습니다.
      <br />
      Spring 팀은 개발에 대한 열정을 통해 개발 지식을 공유하고 함께 고민하면서, 공동의 기술적 성장을
      목표로 합니다.
      <br />
      이러한 열정을 프로젝트, 세미나, 스터디를 통하여 실제로 행동에 옮기면서 개발자로서의 성장을
      추구하고 있습니다! 🌱
      <br />
      개발 뿐 아니라, 놀 때도 최선을 다해 재미까지 챙기는 Spring 팀에서 열정적인 에너지를 전달하는
      동료가 되어줄 개발자 분들을 기다리고 있습니다.
    </>
  ),
  talent: [
    {
      id: 'spring-talent-1',
      content: <>📢 스프링 프로젝트를 통한 협업 경험이 있으신 분</>,
    },
    {
      id: 'spring-talent-2',
      content: (
        <>📢 Mash-Up 활동(세미나/프로젝트/번개 등)에 뼈를 갈아넣을 수 있는 열정을 가지신 분 </>
      ),
    },
    {
      id: 'spring-talent-3',
      content: <>📢 개인뿐만 아닌 공동의 기술적 성장과 교류에 대해 “적극적인” 수다쟁이 </>,
    },
    {
      id: 'spring-talent-4',
      content: <>📢 팀 활동에 “책임감”을 가지고 끝까지 완수하는 태도를 가지신 분</>,
    },
    {
      id: 'spring-talent-5',
      content: <>📢 본인의 목표와 꿈에 대해 두려움없이 꾸준히 도전하시는 분</>,
    },
  ],
  study: [
    {
      id: 'spring-study-1',
      content: <>매주 스터디를 통해 공부한 주제 포스팅 및 발표 (주제는 함께 정해요!)</>,
      subItems: [
        {
          id: 'spring-study-1-1',
          content: <>📚 Spring</>,
        },
        {
          id: 'spring-study-1-2',
          content: <>📚 Kotlin, 코루틴</>,
        },
        {
          id: 'spring-study-1-3',
          content: <>📚 미들웨어 (Kafka, Redis)</>,
        },
        {
          id: 'spring-study-1-4',
          content: <>📚 아키텍처, 인프라</>,
        },
      ],
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
      title: { text: '직장인 혹은 학생 지원 가능한가요? ' },
      content: [
        {
          id: 'spring-question-2-1',
          content: <>저희 매쉬업은 직장인과 학생 구분 없이 활동할 수 있어요!</>,
        },
        {
          id: 'spring-question-2-2',
          content: (
            <>
              서버 개발 시 경험하지 못한 영역에 대하여 도전적으로 개발 할 수 있는 분이면 지원
              가능합니다.
            </>
          ),
        },
        {
          id: 'spring-question-2-3',
          content: <>직장인</>,
          subItems: [
            {
              id: 'spring-question-2-3-1',
              content: <>일과 함께 동아리 활동을 병행하여 “빠지지 않고” 참여할 수 있는 분</>,
            },
            {
              id: 'spring-question-2-3-2',
              content: <>프로젝트, 스터디 진행에 “적극적인” 참여가 가능하신 분</>,
            },
          ],
        },
        {
          id: 'spring-question-2-4',
          content: <>학생</>,
          subItems: [
            {
              id: 'spring-question-2-4-1',
              content: <>부족한 부분을 스스로 공부하고 적극적으로 질문할 수 있는 분</>,
            },
            {
              id: 'spring-question-2-4-2',
              content: <>경험이 많지 않더라도 도전정신을 갖고 열심히 참여하실 분</>,
            },
          ],
        },
      ],
    },
    {
      id: 'spring-question-3',
      title: { text: '스프링을 얼마나 알아야 지원할 수 있나요?' },
      content: [
        {
          id: 'spring-question-3-1',
          content: (
            <>
              원활한 프로젝트, 세미나 진행과 기존 인원과의 실력차를 고려하여 스프링을 이용해 간단한
              프로젝트라도 경험해보신 분을 모시려고 합니다. (세미나 시간에 교육 프로그램을 지원하지
              않습니다)
            </>
          ),
        },
        {
          id: 'spring-question-3-2',
          content: (
            <>
              물론 스프링에 대한 지식이 부족해도 괜찮아요. 😊
              <br />
              단, 의존적인 자세보다는 주도적인 자세를 가진 분이시면 좋겠어요!
            </>
          ),
        },
        {
          id: 'spring-question-3-3',
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
      id: 'spring-question-4',
      title: { text: '스프링팀 모임이나 세미나는 어떻게 진행되나요? ' },
      content: [
        {
          id: 'spring-question-4-1',
          content: (
            <>
              근황 토크를 시작으로 기술 세미나와 토론 및 스터디를 진행해요.
              <br />
              또한, 경험해본 기술이나 겪었던 이슈에 대해 공유하며 다양한 이야기를 나누기도 하고,
              스터디 내용을 공유하는 시간을 갖기도 합니다.
            </>
          ),
        },
        {
          id: 'spring-question-4-2',
          content: <>한 달에 2~3번 정도 격주로, 평일 혹은 주말에 Spring 세미나를 진행해요</>,
        },
        {
          id: 'spring-question-4-3',
          content: (
            <>
              평일의 경우 온라인(Discord)으로, 주말의 경우 상황에 따라 온/오프라인 진행할 예정이에요
            </>
          ),
        },
      ],
    },
    {
      id: 'spring-question-5',
      title: { text: '프로젝트 진행을 하게 되면 스프링은 무엇을 하나요? ' },
      content: [
        {
          id: 'spring-question-5-1',
          content: <>Client, Design, Server가 한 팀이 되어 프로젝트를 진행합니다.</>,
        },
        {
          id: 'spring-question-5-2',
          content: (
            <>
              Mash-Up은 저희 모두가 기획자입니다.
              <br />
              함께 팀원들과 기획적 아이디어를 제안하고 가다듬으며, 멋진 서비스를 완성해나가요
            </>
          ),
        },
        {
          id: 'spring-question-5-3',
          content: (
            <>
              프로젝트 팀에서 정한 서비스에 맞는 다양한 성격의 서버(API, Auth, Chatting, Batch,
              Crawling...)를 만들 수도 있어요.
            </>
          ),
        },
      ],
    },
  ],
};
export default spring;
