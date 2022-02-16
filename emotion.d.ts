import '@emotion/react';
import {
  FontType,
  ColorType,
  ZIndexType,
  InputType,
  A11yTheme,
  ButtonTheme,
  BreakPointTheme,
} from '@/styles';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontType;
    colors: ColorType;
    zIndex: ZIndexType;
    input: InputType;
    a11y: A11yTheme;
    button: ButtonTheme;
    breakPoint: BreakPointTheme;
  }
}
