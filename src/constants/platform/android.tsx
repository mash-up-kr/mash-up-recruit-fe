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
};

export default android;
