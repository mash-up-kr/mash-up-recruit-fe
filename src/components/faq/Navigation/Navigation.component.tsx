import { LinkTo } from '@/components';

import { FAQ_COMMON_PAGE, PlatformKey, platforms } from '@/constants';

import * as Styled from './Navigation.styled';

const platformsWithCommon = [
  {
    key: 'common',
    name: '공통질문',
    path: {
      faq: FAQ_COMMON_PAGE,
    },
  },
  ...platforms,
];
interface NavigationProps {
  platformName: PlatformKey | 'common';
  handleClickItem?: () => void;
}

const Navigation = ({ platformName, handleClickItem }: NavigationProps) => {
  return (
    <nav>
      <Styled.List>
        {platformsWithCommon.map(({ path, name, key }) => (
          <Styled.ListItem active={platformName === key} key={key} onClick={handleClickItem}>
            <LinkTo href={path.faq}>
              {name} {key !== 'common' && 'Team'}
            </LinkTo>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </nav>
  );
};

export default Navigation;
