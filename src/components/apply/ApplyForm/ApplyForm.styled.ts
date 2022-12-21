import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ControlSection = styled.div`
  ${({ theme }) => css`
    width: 41.6rem;
    margin-top: 3.6rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
    }
  `}
`;
