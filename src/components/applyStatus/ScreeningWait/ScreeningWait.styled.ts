import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ScreeningWait = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 59.3rem;
    margin: 0 auto;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      max-width: 66.1rem;
    }
  `}
`;

export const StatusMessage = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    display: block;
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold22};
      word-break: keep-all;
    }
  `}
`;

export const StatusDescription = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
    display: block;
    margin-top: 1.6rem;
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.regular14};
      word-break: keep-all;
    }
  `}
`;
