import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Modal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  `}
`;
