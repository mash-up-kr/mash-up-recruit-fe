import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 78.4rem;
    margin: 6rem auto;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 68rem;
      padding: 0 2rem;
    }
  `}
`;

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: 0;
    border: 0.1rem solid ${theme.colors.gray30};
  `}
`;
