import yeahLottie from '@/assets/lottie/yeah.json';
import DoubleUnderline from '@/assets/svg/double-underline.svg';
import GenerationRight from '@/assets/images/generation-right-2x.png';
import Image from 'next/image';
import { RecruitingPeriodDesktop, Lottie } from '@/components';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION, CURRENT_GENERATION } from '@/constants';
import * as Styled from './RecruitingOpenHero.styled';

const RecruitingOpenHero = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <span data-aos="fade-up" data-aos-duration={AOS_DEFAULT_DURATION}>
          Mash-Up
        </span>
        <Styled.Generation>
          <span
            data-aos="fade-up"
            data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
          >
            {CURRENT_GENERATION}th
          </span>
          <Styled.RightImageContainer>
            <Image
              src={GenerationRight.src}
              alt=""
              layout="fill"
              data-aos="fade-up"
              data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}
            />
          </Styled.RightImageContainer>
        </Styled.Generation>
        <Styled.RookieRecruiting
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 2 * AOS_BASE_DURATION_DISTANCE}
        >
          Rookie Recruiting
        </Styled.RookieRecruiting>
        <span
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
        >
          OPEN
        </span>
        <Styled.DoubleUnderlineContainer
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
        >
          <DoubleUnderline />
        </Styled.DoubleUnderlineContainer>
        <Styled.YeahContainer
          data-aos="fade-up"
          data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
        >
          <Lottie animationData={yeahLottie} />
        </Styled.YeahContainer>
        <RecruitingPeriodDesktop />
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingOpenHero;
