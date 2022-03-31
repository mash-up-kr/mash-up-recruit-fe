import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProcessFail = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const FailHeading = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;
    white-space: pre-wrap;
  `}
`;

export const FailParagraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
    margin-top: 1.6rem;
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;
  `}
`;
