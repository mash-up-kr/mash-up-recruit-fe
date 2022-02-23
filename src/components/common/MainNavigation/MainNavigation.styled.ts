import { HOME_PAGE } from '@/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  position: relative;
  align-self: flex-end;
`;

interface NavListProps {
  currentPage: string;
}

export const NavList = styled.ul<NavListProps>`
  ${({ theme, currentPage }) => css`
    display: flex;
    align-items: center;
    height: 2.7rem;

    & > li {
      ${theme.fonts.kr.bold18}
      margin: 0 2rem;

      &:first-of-type {
        margin-left: 0;
      }
      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        margin-right: 0;
        svg {
          margin-left: 4rem;
        }
      }
      &:last-of-type {
        margin-right: 0;
        margin-left: 4rem;
      }

      & > a {
        color: ${currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
      }

      & > a:hover {
        color: ${theme.colors.purple70};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      & > li {
        ${theme.fonts.kr.medium15};

        margin: 0 1rem;

        &:first-of-type {
          margin-left: 0;
        }
        &:nth-of-type(2) {
          display: flex;
          align-items: center;
          margin-right: 0;
          svg {
            margin-left: 2rem;
          }
        }
        &:last-of-type {
          margin-right: 0;
          margin-left: 2rem;
        }
      }
    }
  `}
`;

interface SignInButtonProps {
  currentPage: string;
}

export const SignInButton = styled.button<SignInButtonProps>`
  ${({ theme, currentPage }) => css`
    ${theme.fonts.kr.bold18}
    padding: 0;
    color: ${currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
    background: transparent;
    border: 0;

    &:hover {
      color: ${theme.colors.purple70};
    }
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};
    }
  `}
`;

interface MyPageButtonProps {
  currentPage: string;
  isOpenMyPageTab: boolean;
}

export const MyPageButton = styled.button<MyPageButtonProps>`
  ${({ theme, currentPage, isOpenMyPageTab }) => css`
    ${theme.fonts.kr.bold18}
    display: flex;
    align-items: center;
    padding: 0;
    color: ${currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
    background: transparent;
    border: 0;

    & > span {
      margin-right: 0.6rem;
    }

    & > svg {
      color: ${theme.colors.purple70};
      ${isOpenMyPageTab
        ? css`
            transform: rotate(-180deg);
          `
        : css`
            transform: rotate(deg);
          `};
    }

    & > svg > path {
      stroke: ${currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
    }

    &:hover {
      color: ${theme.colors.purple70};

      & > svg > path {
        stroke: ${theme.colors.purple70};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};

      & > span {
        margin-right: 0.4rem;
      }
    }
  `}
`;
