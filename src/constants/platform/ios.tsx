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
};

export default ios;
