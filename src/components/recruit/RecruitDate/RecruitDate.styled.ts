import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.light15};
    color: ${theme.colors.purple60};
  `}
`;
