import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    width: 80rem;
    max-width: 100%;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: auto;
    }
  `}
`;
