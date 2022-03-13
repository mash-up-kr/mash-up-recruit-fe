import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StatusDetail = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 4rem auto 0;
    padding: 4rem;
    background: ${theme.colors.gray90};
    border-radius: 3rem;
  `}
`;
