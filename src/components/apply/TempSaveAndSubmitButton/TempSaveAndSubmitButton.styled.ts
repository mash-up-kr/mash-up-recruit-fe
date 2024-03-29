import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    width: 20rem;
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
      margin-right: 0;
    }
  `}
`;

export const TempSaveButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primaryLine}
    width: 20rem;
    margin-right: 1.6rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1.6rem;
    }
  `}
`;
