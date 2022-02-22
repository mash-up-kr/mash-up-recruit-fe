import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Accordion = styled.div`
  ${({ theme }) => css`
    & > *:not([aria-hidden='true']) {
      margin: 2rem 0;
    }

    border-bottom: 0.1rem solid ${theme.colors.gray20};
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
    transition: height 0.35s ease;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.regular14};
    }
  `}
`;

export const Content = styled.p`
  white-space: pre-wrap;
`;
