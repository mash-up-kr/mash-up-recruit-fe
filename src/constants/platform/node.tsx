import { FAQ_NODE_PAGE, RECRUIT_NODE_PAGE, APPLY_NODE_PAGE } from '@/constants';
import NodeLeftEmoji from '@/assets/svg/node-left-emoji.svg';
import NodeRightEmoji from '@/assets/svg/node-right-emoji.svg';

const node = {
  id: 'node',
  name: 'Node',
  role: 'Backend Developer',
  path: {
    recruit: RECRUIT_NODE_PAGE,
    faq: FAQ_NODE_PAGE,
    apply: APPLY_NODE_PAGE,
  },
  hero: {
    color: '#1D1F22',
    emojis: [NodeLeftEmoji, NodeRightEmoji],
  },
};
export default node;
