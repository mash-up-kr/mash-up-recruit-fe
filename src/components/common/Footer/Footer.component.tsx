import GithubWhite32 from '@/assets/svg/github-white-32.svg';
import Mail32 from '@/assets/svg/mail-32.svg';
import Tistory32 from '@/assets/svg/tistory-32.svg';
import Behance32 from '@/assets/svg/behance-32.svg';
import Facebook32 from '@/assets/svg/facebook-32.svg';
import Instagram32 from '@/assets/svg/instagram-32.svg';
import { useRouter } from 'next/router';
import { CURRENT_GENERATION, HOME_PAGE } from '@/constants';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import { RecruitSchedule } from '@/types/dto';
import { useEffect, useState } from 'react';
import { applicationApiService } from '@/api/services';
import * as Styled from './Footer.styled';

const Footer = () => {
  const { pathname: currentPage } = useRouter();

  const [recruitSchedule, setRecruitSchedule] = useState<RecruitSchedule | null>(null);

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });

  useEffect(() => {
    const fetchRecruitSchedule = async () => {
      const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
        generationNumber: CURRENT_GENERATION,
      });

      setRecruitSchedule(generateRecruitSchedule(recruitScheduleResponse));
    };

    fetchRecruitSchedule();
  }, []);

  if (recruitSchedule === null) {
    return null;
  }

  return (
    <>
      {recruitingProgressStatus === 'PREVIOUS' && null}
      {recruitingProgressStatus !== 'PREVIOUS' && (
        <Styled.Footer currentPage={currentPage}>
          <Styled.FooterInner>
            <Styled.Copyright currentPage={currentPage}>
              © Mash-Up 2025. Made in Seoul.
            </Styled.Copyright>
            <Styled.ExternalLinkWrapper currentPage={currentPage}>
              <a
                href="https://github.com/mash-up-kr/"
                target="_blank"
                rel="noreferrer"
                aria-label="mash up github"
              >
                {currentPage === HOME_PAGE ? (
                  <Styled.GithubIconWrapper>
                    <Styled.GithubIconBackground />
                    <Styled.GithubIconDark aria-hidden />
                  </Styled.GithubIconWrapper>
                ) : (
                  <GithubWhite32 aria-hidden />
                )}
              </a>
              <a href="mailto:recruit.mashup@gmail.com" aria-label="mash up email">
                <Mail32 aria-hidden />
              </a>
              <a
                href="https://mash-up.tistory.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="mash up tistory"
              >
                <Tistory32 aria-hidden />
              </a>
              <a
                href="https://www.behance.net/Mash-Up/"
                target="_blank"
                rel="noreferrer"
                aria-label="mash up behance"
              >
                <Behance32 aria-hidden />
              </a>
              <a
                href="https://www.facebook.com/mashupgroup/"
                target="_blank"
                rel="noreferrer"
                aria-label="mash up facebook"
              >
                <Facebook32 aria-hidden />
              </a>
              <a
                href="https://www.instagram.com/official_mashup_/"
                target="_blank"
                rel="noreferrer"
                aria-label="mash up instagram"
              >
                <Instagram32 aria-hidden />
              </a>
            </Styled.ExternalLinkWrapper>
          </Styled.FooterInner>
        </Styled.Footer>
      )}
    </>
  );
};

export default Footer;
