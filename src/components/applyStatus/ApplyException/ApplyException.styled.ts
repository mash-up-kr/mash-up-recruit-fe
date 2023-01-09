import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ExceptionMessage = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold22};
    }
  `}
`;
