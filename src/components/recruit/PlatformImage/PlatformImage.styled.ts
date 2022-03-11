import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 28.4rem;

    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background: rgba(0, 0, 0, 0.5);
      content: '';
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      height: 20rem;
    }
  `}
`;
