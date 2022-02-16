import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 82.4rem;
    margin: 0 auto;
    padding: 8.4rem 2rem 15.8rem;

    @media (max-width: ${theme.breakPoint.mobile}) {
      padding: 3.6rem 2rem 9.9rem;
    }
  `}
`;

export const ApplyHeading = styled.h2`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;