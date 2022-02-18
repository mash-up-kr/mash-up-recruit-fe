import { HOME_PAGE } from '@/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface HeaderProps {
  isScrollTop: boolean;
  currentPage: string;
  isHome: boolean;
}

export const Header = styled.header<HeaderProps>`
  ${({ theme, isScrollTop, currentPage, isHome }) => css`
    position: fixed;
    z-index: ${theme.zIndex.header};
    width: 100%;
    height: 8rem;
    padding: 1.7rem 0;
    ${isScrollTop && currentPage === HOME_PAGE
      ? css`
          background: ${theme.colors.black};
        `
      : css`
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(2rem);
        `};

    transition: ${isHome ? '0.5s' : 0};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 6rem;
    }
  `}
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

interface HeadingProps {
  isScrollTop: boolean;
  currentPage: string;
}

export const Heading = styled.h1<HeadingProps>`
  ${({ theme, isScrollTop, currentPage }) => css`
    display: inline-block;
    width: 24rem;
    padding: 0.7rem 0 0 0.6rem;

    span {
      ${theme.fonts.en.extrabold24}
      margin-left: 1.3rem;
      color: ${isScrollTop && currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray90};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: auto;
      padding: 0.3rem 0 0 0.3rem;

      span {
        ${theme.a11y.visuallyHidden}
      }
    }
  `}
`;
