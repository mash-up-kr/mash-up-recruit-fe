import { Navigation } from '@/components';
import { PlatformKey } from '@/components/faq/Navigation/Navigation.component';

import * as Styled from './SideNavigation.styled';

interface SideNavigationProps {
  platformName?: PlatformKey;
}

const SideNavigation = ({ platformName }: SideNavigationProps) => {
  return (
    <Styled.Navigation>
      <Navigation platformName={platformName} />
    </Styled.Navigation>
  );
};

export default SideNavigation;
