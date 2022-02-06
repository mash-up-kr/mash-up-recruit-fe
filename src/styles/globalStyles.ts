import resetCss from '@/styles/reset';
import gilroy from '@/styles/fonts/gilroy';
import spoqaHanSans from '@/styles/fonts/spoqaHanSans';
import { css } from '@emotion/react';

const globalStyles = css`
  ${resetCss}
  ${gilroy}
  ${spoqaHanSans}
`;

export default globalStyles;
