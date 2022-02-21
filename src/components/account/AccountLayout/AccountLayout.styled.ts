import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 0 2rem;
    background: ${theme.colors.gray5};
  `}
`;
