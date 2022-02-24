import Mail32 from '@/assets/svg/mail-32.svg';
import Tistory32 from '@/assets/svg/tistory-32.svg';
import Behance32 from '@/assets/svg/behance-32.svg';
import Facebook32 from '@/assets/svg/facebook-32.svg';
import Instagram32 from '@/assets/svg/instagram-32.svg';
import { useRouter } from 'next/router';
import * as Styled from './Footer.styled';

const Footer = () => {
  const { pathname: currentPage } = useRouter();
  return (
    <Styled.Footer currentPage={currentPage}>
      <Styled.FooterInner>
        <Styled.Copyright currentPage={currentPage}>
          © Mash-Up 2022. Made in Seoul.
        </Styled.Copyright>
        <Styled.ExternalLinkWrapper currentPage={currentPage}>
          <a href="mailto:recruit.mashup@gmail.com">
            <Mail32 />
          </a>
          <a href="https://mash-up.tistory.com/" target="_blank" rel="noreferrer">
            <Tistory32 />
          </a>
          <a href="https://www.behance.net/Mash-Up/" target="_blank" rel="noreferrer">
            <Behance32 />
          </a>
          <a href="https://www.facebook.com/mashupgroup/" target="_blank" rel="noreferrer">
            <Facebook32 />
          </a>
          <a href="https://www.instagram.com/official_mashup_/" target="_blank" rel="noreferrer">
            <Instagram32 />
          </a>
        </Styled.ExternalLinkWrapper>
      </Styled.FooterInner>
    </Styled.Footer>
  );
};

export default Footer;
