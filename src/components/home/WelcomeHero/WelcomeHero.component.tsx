import Hi from '@/assets/svg/hi.svg';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import Image from 'next/image';
import WelcomeHeroLeft from '@/assets/images/welcome-hero-left-2x.png';
import WelcomeHeroRight from '@/assets/images/welcome-hero-right-2x.png';
import * as Styled from './WelcomeHero.styled';

const WelcomeHero = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <span data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
          WELCOME
        </span>
        <Styled.WeAre>
          <Styled.LeftImageContainer>
            <Image src={WelcomeHeroLeft.src} alt="" layout="fill" priority />
          </Styled.LeftImageContainer>
          <span
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            We are
          </span>
        </Styled.WeAre>
        <Styled.MashUp
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 2 * AOS_BASE_DURATION_DISTANCE}
        >
          Mash-Up
        </Styled.MashUp>
        <Styled.Crewz>
          <span
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
          >
            Crewz
          </span>
          <Styled.RightImageContainer>
            <Image src={WelcomeHeroRight.src} layout="fill" alt="" priority />
          </Styled.RightImageContainer>
        </Styled.Crewz>
        <Styled.HiContainer
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
        >
          <Hi />
        </Styled.HiContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};
export default WelcomeHero;
