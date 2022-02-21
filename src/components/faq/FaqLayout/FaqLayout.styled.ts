import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 120rem;
    margin: 0 auto;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 6rem;
      margin: 0 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-direction: column;
      gap: 0;
    }
  `}
`;
