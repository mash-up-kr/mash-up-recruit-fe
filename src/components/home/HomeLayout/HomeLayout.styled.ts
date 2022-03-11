import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    min-height: 200vh;
    margin-top: -8rem;
    padding-top: 8rem;
    padding-bottom: 20rem;
    background: ${theme.colors.gray95};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding-bottom: 16rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-top: -6rem;
      padding-top: 6rem;
    }
  `}
`;
