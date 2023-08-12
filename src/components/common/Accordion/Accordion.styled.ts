import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Accordion = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray80};
    border-bottom: 0.1rem solid ${theme.colors.gray20};

    & > *:not([aria-hidden='true']) {
      margin: 2rem 0;
    }
  `}
`;

export const Header = styled.h3`
  ${({ theme }) => css`
    button {
      ${theme.fonts.kr.bold20};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0;
      color: ${theme.colors.gray80};
      text-align: left;
      background: ${theme.colors.white};
      border: 0;

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        ${theme.fonts.kr.medium16};

        svg {
          width: 2.7rem;
          height: 2.7rem;
        }
      }
    }
  `}
`;

export const Panel = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15};
    height: 0;
    overflow: hidden;
    color: ${theme.colors.gray70};
    transition: height 0.35s ease;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.regular14};
    }
  `}
`;

export const ContentsContainer = styled.div`
  ${({ theme }) => css`
    ul {
      ${theme.fonts.kr.medium16};
      margin-left: 2.4rem;
      color: ${theme.colors.gray70};
      list-style-type: disc;

      & > * {
        margin: 0.6rem 0;
      }
    }

    ol {
      ${theme.fonts.kr.medium16};
      margin-left: 2.4rem;
      color: ${theme.colors.gray70};
      list-style-type: decimal;

      & > * {
        margin: 0.6rem 0;
      }
    }

    li:first-of-type {
      margin: 0;
    }

    li > ul,
    li > ol {
      margin: 0.6rem 0 0 2.4rem;
    }
  `}
`;
