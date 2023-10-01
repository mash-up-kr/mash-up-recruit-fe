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
};
export default spring;
