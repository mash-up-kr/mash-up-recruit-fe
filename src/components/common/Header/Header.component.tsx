import { LinkTo, MainNavigation } from '@/components';
import { HOME_PAGE, VIEWPORT_SIZE } from '@/constants';
import { useDetectViewPort } from '@/hooks';
import MashUpLogo24 from '@/assets/svg/mash-up-logo-24.svg';
import MashUpLogo33 from '@/assets/svg/mash-up-logo-33.svg';
import * as Styled from './Header.styled';

const Header = () => {
  const { size } = useDetectViewPort();

  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <LinkTo href={HOME_PAGE}>
          <Styled.Heading aria-label="Mash Up Recruit">
            {size === VIEWPORT_SIZE.MOBILE ? <MashUpLogo24 /> : <MashUpLogo33 />}
            <span>Mash-Up Recruit</span>
          </Styled.Heading>
        </LinkTo>
        <MainNavigation />
      </Styled.HeaderInner>
    </Styled.Header>
  );
};

export default Header;
