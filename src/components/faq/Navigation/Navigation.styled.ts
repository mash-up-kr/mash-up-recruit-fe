import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledLiProps {
  active: boolean;
}

export const List = styled.ul`
  ${({ theme }) => css`
    margin: 1rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      margin: 0;
    }
  `}
`;

export const ListItem = styled.li<StyledLiProps>`
  ${({ theme, active }) => css`
    ${theme.fonts.en.extrabold20};
    color: ${active ? theme.colors.gray80 : theme.colors.gray50};

    &:first-of-type {
      ${theme.fonts.kr.bold22};

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        ${theme.fonts.kr.bold16};
      }
    }

    @media (hover: hover) {
      &:hover {
        background: ${theme.colors.gray10};
        border-radius: 1rem;
      }
    }

    &:active {
      background: ${theme.colors.gray10};
      border-radius: 1rem;
    }

    & > a {
      display: block;
      padding: 1.6rem;
      color: inherit;

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        ${theme.fonts.en.extrabold15};
        padding: 1.4rem;
      }
    }
  `}
`;
