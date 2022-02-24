import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const OverSizeModal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.zIndex.header};
    width: 100vw;
    height: 200vh;
    background: rgba(0, 0, 0, 0.5);
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
  `}
`;
