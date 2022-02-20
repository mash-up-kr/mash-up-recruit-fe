import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Navigation = styled.nav`
  ${({ theme }) => css`
    width: 30rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 23.2rem;
    }
  `}
`;
