import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 78.4rem;
  margin: 0 auto;
  padding: 8.4rem 0 15.8rem;
`;

export const ApplyHeading = styled.h2`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;
