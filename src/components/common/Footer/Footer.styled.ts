import { HOME_PAGE } from '@/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import GithubDark32 from '@/assets/svg/github-dark-32.svg';

interface FooterProps {
  currentPage: string;
}

export const Footer = styled.footer<FooterProps>`
  ${({ theme, currentPage }) => css`
    width: 100%;
    height: 11.2rem;
    padding: 4rem 0;
    background: ${currentPage === HOME_PAGE ? theme.colors.gray95 : theme.colors.white};

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

export const GithubIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 3.2rem;
`;

export const GithubIconBackground = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 55%;
    left: 50%;
    width: 2.85rem;
    height: 2.85rem;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
  `}
`;

export const GithubIconDark = styled(GithubDark32)`
  position: absolute;
`;

interface ExternalLinkWrapperProps {
  currentPage: string;
}

export const ExternalLinkWrapper = styled.div<ExternalLinkWrapperProps>`
  ${({ theme, currentPage }) => css`
    & > a {
      margin: 0 0.75rem;

      & > svg > circle {
        fill: ${currentPage === HOME_PAGE ? theme.colors.gray80 : theme.colors.gray40};
      }
    }
  `}
`;
