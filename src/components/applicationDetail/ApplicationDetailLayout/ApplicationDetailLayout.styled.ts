import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ApplicationDetailHeadingWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.purple20};
  `}
`;

export const ApplicationDetailHeadingInner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 82.4rem;
    margin: 0 auto;
    padding: 5rem 2rem 3rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 3.6rem 2rem 2rem;
    }
  `}
`;

export const ApplicationDetailHeading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold46};
    margin-bottom: 2rem;
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold24};
    }
  `}
`;

export const PlatformHeading = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold24};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold18}
      margin-bottom: 0.8rem;
    }
  `}
`;

export const PlatformRole = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold18};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold15};
    }
  `}
`;

export const Layout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 82.4rem;
    margin: 0 auto;
    padding: 0rem 2rem 12.9rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 3.6rem 2rem 9.9rem;
    }
  `}
`;
