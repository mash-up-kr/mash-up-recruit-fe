import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15};
    margin: 0 0 0 2rem;
    list-style-type: disc;
  `}
`;

export const ListItem = styled.li`
  & > ul {
    margin: 0 0 0 2rem;
    list-style-type: circle;
  }
`;
