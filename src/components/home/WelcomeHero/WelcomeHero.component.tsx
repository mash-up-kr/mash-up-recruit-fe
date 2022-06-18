import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
import Image from 'next/image';
import WelcomeHeroLeft from '@/assets/images/welcome-hero-left-2x.png';
import WelcomeHeroRight from '@/assets/images/welcome-hero-right-2x.png';
import hiLottie from '@/assets/lottie/hi.json';
import { Lottie } from '@/components';
import * as Styled from './WelcomeHero.styled';

const WelcomeHero = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Welcome data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
          WELCOME
        </Styled.Welcome>
        <Styled.WeAre>
          <Styled.LeftImageContainer>
            <Image
              src={WelcomeHeroLeft.src}
              alt=""
              layout="fill"
              priority
              data-aos="fade-up"
              data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
            />
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
            <Image
              src={WelcomeHeroRight.src}
              layout="fill"
              alt=""
              priority
              data-aos="fade-up"
              data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
            />
          </Styled.RightImageContainer>
        </Styled.Crewz>
        <Styled.HiContainer
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
        >
          <Lottie aria-hidden animationData={hiLottie} />
        </Styled.HiContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};
export default WelcomeHero;
