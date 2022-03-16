import { LinkTo, MainNavigation } from '@/components';
import { HOME_PAGE } from '@/constants';
import { useRouter } from 'next/router';
import * as Styled from './Header.styled';

const Header = () => {
  const { pathname: currentPage } = useRouter();

  return (
    <Styled.Header currentPage={currentPage}>
      <Styled.HeaderInner>
        <LinkTo href={HOME_PAGE}>
          <Styled.Heading currentPage={currentPage} aria-label="Mash Up Recruit">
            <Styled.MashUpLogo />
            <span>Mash-Up Recruit</span>
          </Styled.Heading>
        </LinkTo>
        <MainNavigation />
      </Styled.HeaderInner>
    </Styled.Header>
  );
};

export default Header;
