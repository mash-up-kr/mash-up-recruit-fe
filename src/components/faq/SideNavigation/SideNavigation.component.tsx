import { Navigation } from '@/components';
import { PlatformKey } from '@/constants';

import * as Styled from './SideNavigation.styled';

interface SideNavigationProps {
  platformName: PlatformKey | 'common';
}

const SideNavigation = ({ platformName }: SideNavigationProps) => {
  return (
    <Styled.NavigationContainer>
      <Navigation platformName={platformName} />
    </Styled.NavigationContainer>
  );
};

export default SideNavigation;
