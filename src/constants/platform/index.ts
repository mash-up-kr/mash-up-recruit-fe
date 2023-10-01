import { ValueOf } from '@/types';
import web from './web';
import spring from './spring';
import design from './design';
import ios from './ios';
import android from './android';
import node from './node';

export const platformKeys = {
  design: 'design',
  web: 'web',
  android: 'android',
  ios: 'ios',
  node: 'node',
  spring: 'spring',
} as const;

export type PlatformKey = ValueOf<typeof platformKeys>;

export type Path = {
  recruit: string;
  faq: string;
  apply: string;
};

export type Platform = {
  id: string;
  name: string;
  role: string;
  path: Path;
  hero: {
    color: string;
    emojis: any[];
  };
};

export const platformMap: Record<PlatformKey, Platform> = {
  design,
  android,
  ios,
  web,
  node,
  spring,
};

export const platforms = Object.entries(platformMap).map(([key, platform]) => ({
  ...platform,
  key,
}));

export type Platforms = typeof platforms;
