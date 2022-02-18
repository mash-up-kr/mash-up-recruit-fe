import { HOME_PAGE } from '@/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface FooterProps {
  currentPage: string;
}

export const Footer = styled.footer<FooterProps>`
  ${({ theme, currentPage }) => css`
    width: 100%;
    height: 11.2rem;
    padding: 4rem 0;
    background: ${currentPage === HOME_PAGE ? theme.colors.gray90 : theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-flow: column nowrap;
      height: 11rem;
      padding: 2rem 0;
    }
  `}
`;

export const FooterInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-flow: column nowrap;
    }
  `}
`;

interface CopyrightProps {
  currentPage: string;
}

export const Copyright = styled.small<CopyrightProps>`
  ${({ theme, currentPage }) => css`
    ${theme.fonts.kr.regular14};
    color: ${currentPage === HOME_PAGE ? theme.colors.white : theme.colors.purple70};
  `}
`;

interface ExternalLinkWrapperProps {
  currentPage: string;
}

export const ExternalLinkWrapper = styled.div<ExternalLinkWrapperProps>`
  ${({ theme, currentPage }) => css`
    & > a {
      margin: 0 1.5rem;

      & > svg > circle {
        fill: ${currentPage === HOME_PAGE ? theme.colors.gray70 : theme.colors.gray40};
      }
    }
  `}
`;
