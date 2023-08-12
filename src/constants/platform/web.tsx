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
};

export default web;
