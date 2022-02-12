import '@emotion/react';
import { FontType, ColorType } from '@/styles';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontType;
    colors: ColorType;
  }
}
