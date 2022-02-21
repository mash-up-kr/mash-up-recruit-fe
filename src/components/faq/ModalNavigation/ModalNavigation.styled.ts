import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ModalOpenButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    padding: 2.5rem 3rem;
    border-radius: 2rem;
  `}
`;

export const NavigationContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem 0;
  background: white;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
