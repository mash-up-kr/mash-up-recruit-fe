import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    margin: 0 0 0 2rem;
    list-style-type: disc;
    ${theme.fonts.kr.regular15};
  `}
`;

export const ListItem = styled.li`
  & > ul {
    margin: 0 0 0 2rem;
    list-style-type: circle;
  }
`;
