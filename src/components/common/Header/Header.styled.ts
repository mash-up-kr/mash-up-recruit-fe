import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 1.7rem 0;
    background: ${theme.colors.white};
  `}
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120rem;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    display: inline-block;
    width: 24rem;
    padding: 0.7rem 0 0 0.6rem;

    span {
      ${theme.fonts.en.extrabold24}
      margin-left: 1.3rem;
      color: ${theme.colors.gray90};
    }
  `}
`;
