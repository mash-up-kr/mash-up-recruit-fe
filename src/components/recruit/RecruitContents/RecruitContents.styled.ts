import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 78.4rem;
    margin: 6rem auto;

    & > * {
      margin: 4rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 68rem;
      margin: 6rem auto;
      padding: 0 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      max-width: none;
    }
  `}
`;
