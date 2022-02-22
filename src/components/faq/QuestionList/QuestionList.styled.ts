import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    width: 80rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      flex: 1 0 0;
      width: 100%;
    }
  `}
`;
