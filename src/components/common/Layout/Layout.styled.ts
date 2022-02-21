import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

export const Layout = styled.main`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    padding-top: 8rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-top: 6rem;
    }
  `}
`;
