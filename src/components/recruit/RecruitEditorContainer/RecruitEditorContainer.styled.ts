import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    h3 {
      ${theme.fonts.kr.bold18};
      margin: 1.6rem 0;
      color: ${theme.colors.gray80};
    }

    p {
      ${theme.fonts.kr.medium16};
      width: 100%;
      min-height: 2.4rem;

      @media (max-width: ${theme.breakPoint.media.tabletL}) {
        width: 60rem;
      }

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        width: 100%;
      }
    }

    ul {
      ${theme.fonts.kr.medium16};
      margin-left: 2.4rem;
      color: ${theme.colors.gray70};
      list-style-type: disc;

      & > * {
        margin: 0.6rem 0;
      }
    }

    li {
      &:first-of-type {
        margin: 0;
      }

      & > ul {
        margin: 0.6rem 0 0 2.4rem;
      }
    }
  `}
`;
