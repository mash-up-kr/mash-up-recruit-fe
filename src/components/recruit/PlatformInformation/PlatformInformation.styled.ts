import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray70};
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    margin: 1.6rem 0;
    color: ${theme.colors.gray80};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
  `}
`;
