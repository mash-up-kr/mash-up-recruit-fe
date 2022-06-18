import { Item } from '@/components/common/BulletedList/BulletedList.component';
import { ValueOf } from '@/types';
import { ReactNode } from 'react';
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

export type Question = {
  id: string;
  title: { emoji?: string; text: string };
  content: Item[];
};

export type Platform = {
  id: string;
  name: string;
  role: string;
  path: Path;
  introduction: ReactNode;
  questions: Question[];
  study: Item[];
  interview: Item[];
  talent: Item[];
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
