import { LinkTo, MainNavigation } from '@/components';
import MashUpLogo from '@/assets/svg/mash-up-logo.svg';
import { HOME_PAGE } from '@/constants';
import * as Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <LinkTo href={HOME_PAGE}>
          <Styled.Heading aria-label="Mash Up Recruit">
            <MashUpLogo />
            <span>Mash-Up Recruit</span>
          </Styled.Heading>
        </LinkTo>
        <MainNavigation />
      </Styled.HeaderInner>
    </Styled.Header>
  );
};

export default Header;
