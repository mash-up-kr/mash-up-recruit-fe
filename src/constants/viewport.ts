import { ValueOf } from '@/types';

export const VIEWPORT_SIZE = {
  MOBILE: 'mobile',
  TABLET_S: 'tablet_s',
  TABLET_L: 'tablet_l',
  DESKTOP: 'desktop',
} as const;

export type ViewPort = ValueOf<typeof VIEWPORT_SIZE>;
