import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  align-self: flex-end;
`;

export const NavList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 2.7rem;

    & > li {
      ${theme.fonts.kr.bold18}
      margin: 0 2rem;

      &:first-of-type {
        margin-left: 3.4rem;
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
      }

      & > a {
        color: ${theme.colors.gray80};
      }
    }
  `}
`;

export const LoginButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18}
    padding: 0;
    color: ${theme.colors.gray80};
    background: transparent;
    border: 0;
  `}
`;