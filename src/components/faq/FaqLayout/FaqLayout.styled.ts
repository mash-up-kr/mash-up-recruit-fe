import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-direction: column;
    }
  `}
`;
