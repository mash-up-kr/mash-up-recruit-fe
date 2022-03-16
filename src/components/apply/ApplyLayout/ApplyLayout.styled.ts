import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 82.4rem;
    margin: 0 auto;
    padding: 8rem 2rem 12.3rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 3.6rem 2rem 9.3rem;
    }
  `}
`;

export const ApplyHeading = styled.h2`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;

export const PlatformHeading = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold46};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold24}
    }
  `}
`;

export const PlatformRole = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold16}
    }
  `}
`;
