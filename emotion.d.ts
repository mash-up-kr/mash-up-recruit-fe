import '@emotion/react';
import { FontType, ColorType, ZIndexType } from '@/styles';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontType;
    colors: ColorType;
    zIndex: ZIndexType;
  }
}
