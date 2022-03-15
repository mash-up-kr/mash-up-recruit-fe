import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div``;

interface TitleProps {
  emoji?: string;
}
export const Title = styled.span<TitleProps>`
  ${({ emoji }) => css`
    display: flex;

    justify-content: space-between;
    ${emoji &&
    css`
      &:before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.4rem;
        content: '${emoji}';
      }
    `}
  `}
`;
