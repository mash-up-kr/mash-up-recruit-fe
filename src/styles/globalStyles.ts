import gilroy from '@/styles/fonts/gilroy';
import spoqaHanSansNeo from '@/styles/fonts/spoqaHanSansNeo';
import { css } from '@emotion/react';
import { resetCss } from './reset';

export const globalStyles = css`
  ${gilroy}
  ${spoqaHanSansNeo}
  ${resetCss}
`;
