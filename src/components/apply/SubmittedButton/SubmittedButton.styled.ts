import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AlreadySubmittedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;

export const SubmittedCompletedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;
