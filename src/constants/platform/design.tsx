import { RECRUIT_DESIGN_PAGE, FAQ_DESIGN_PAGE, APPLY_DESIGN_PAGE } from '@/constants';
import DesignLeftEmoji from '@/assets/svg/design-left-emoji.svg';
import DesignRightEmoji from '@/assets/svg/design-right-emoji.svg';

const design = {
  id: 'productDesign',
  name: 'Product Design',
  role: 'Product Designer',
  path: {
    recruit: RECRUIT_DESIGN_PAGE,
    faq: FAQ_DESIGN_PAGE,
    apply: APPLY_DESIGN_PAGE,
  },
  hero: {
    color: '#6220EE',
    emojis: [DesignLeftEmoji, DesignRightEmoji],
  },
};
export default design;
