import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding-top: 8rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-top: 6rem;
    }
  `}
`;
