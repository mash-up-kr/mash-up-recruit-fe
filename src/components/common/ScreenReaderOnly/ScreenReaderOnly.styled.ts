import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ScreenReaderOnly = styled.div`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden}
  `}
`;
