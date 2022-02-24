import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    margin-left: 2.4rem;
    color: ${theme.colors.gray70};
    list-style-type: disc;

    & > * {
      margin: 0.6rem 0;
    }
  `}
`;

export const ListItem = styled.li`
  &:first-of-type {
    margin: 0;
  }

  & > ul {
    margin: 0.6rem 0 0 2.4rem;
  }
`;
