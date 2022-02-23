import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 78.4rem;
    margin: 0 auto;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: none;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin: -2rem 0;
    }
  `}
`;
