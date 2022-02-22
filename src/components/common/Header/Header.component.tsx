import { LinkTo, MainNavigation } from '@/components';
import { HOME_PAGE, VIEWPORT_SIZE } from '@/constants';
import { useDetectViewPort, useWatchingIsScrollTop } from '@/hooks';
import MashUpLogo24 from '@/assets/svg/mash-up-logo-24.svg';
import MashUpLogo33 from '@/assets/svg/mash-up-logo-33.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Styled from './Header.styled';

const Header = () => {
  const [isHome, setIsHome] = useState(false);
  const { size } = useDetectViewPort();
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath === HOME_PAGE) setIsHome(true);
    else setIsHome(false);
  }, [asPath]);

  const isScrollTop = useWatchingIsScrollTop();

  return (
    <Styled.Header isScrollTop={isScrollTop} currentPage={asPath} isHome={isHome}>
      <Styled.HeaderInner>
        <LinkTo href={HOME_PAGE}>
          <Styled.Heading currentPage={asPath} aria-label="Mash Up Recruit">
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
