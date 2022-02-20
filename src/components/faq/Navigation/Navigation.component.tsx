import { LinkTo } from '@/components';

import {
  FAQ_COMMON_PAGE,
  FAQ_SPRING_PAGE,
  FAQ_ANDROID_PAGE,
  FAQ_DESIGN_PAGE,
  FAQ_FRONT_END_PAGE,
  FAQ_IOS_PAGE,
  FAQ_NODE_PAGE,
} from '@/constants';

import * as Styled from './Navigation.styled';

export type PlatformKey = 'common' | 'design' | 'android' | 'ios' | 'front-end' | 'node' | 'spring';

export type Platform = {
  key: PlatformKey;
  path: string;
  name: string;
};

export const platforms: Platform[] = [
  {
    key: 'common',
    path: FAQ_COMMON_PAGE,
    name: '공통질문',
  },
  {
    key: 'design',
    path: FAQ_DESIGN_PAGE,
    name: 'Product Design Team',
  },
  {
    key: 'android',
    path: FAQ_ANDROID_PAGE,
    name: 'Android Team',
  },
  {
    key: 'ios',
    path: FAQ_IOS_PAGE,
    name: 'iOS Team',
  },
  {
    key: 'front-end',
    path: FAQ_FRONT_END_PAGE,
    name: 'Web Team',
  },
  {
    key: 'node',
    path: FAQ_NODE_PAGE,
    name: 'Node Team',
  },
  {
    key: 'spring',
    path: FAQ_SPRING_PAGE,
    name: 'Spring Team',
  },
];

interface NavigationProps {
  platformName?: PlatformKey;
  handleClickItem?: () => void;
}

const Navigation = ({ platformName, handleClickItem = () => {} }: NavigationProps) => {
  return (
    <nav>
      <ul>
        {platforms.map(({ key, name, path }) => (
          <Styled.ListItem active={platformName === key} key={key} onClick={handleClickItem}>
            <LinkTo href={path}>{name}</LinkTo>
          </Styled.ListItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
