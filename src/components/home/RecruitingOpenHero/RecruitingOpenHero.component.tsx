import Yeah from '@/assets/svg/yeah.svg';
import DoubleUnderline from '@/assets/svg/double-underline.svg';
import GenerationRight from '@/assets/images/generation-right-2x.png';
import Image from 'next/image';
import { RecruitingPeriodDesktop } from '@/components';
import { AOS_BASE_DURATION_DISTANCE, AOS_DEFAULT_DURATION } from '@/constants';
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
            12th
          </span>
          <Styled.RightImageContainer>
            <Image src={GenerationRight.src} alt="" layout="fill" />
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
        <DoubleUnderline />
        <Yeah />
        <RecruitingPeriodDesktop />
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingOpenHero;
