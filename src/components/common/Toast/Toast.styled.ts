import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ToastContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Toast = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50rem;
    height: 6.4rem;
    margin: 2rem 0;
    padding: 1.6rem;
    background: ${theme.colors.purple10};
    border: 0.1rem solid ${theme.colors.purple40};
    border-radius: 1.6rem;
    box-shadow: 0px 4px 20px rgba(33, 37, 41, 0.15);
    pointer-events: auto;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 33.5rem;
    }
  `}
`;

export const Contents = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Badge = styled.div`
  line-height: 0;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold16};
  `}
`;

export const CloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background: transparent;
  border: none;
`;
