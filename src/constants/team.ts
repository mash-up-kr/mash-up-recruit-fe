import { ValueOf } from '@/types';

export const teamUrls = {
  design: 'design',
  web: 'web',
  android: 'android',
  ios: 'ios',
  node: 'node',
  spring: 'spring',
} as const;

export const teamNames = {
  design: 'Design',
  web: 'Web',
  android: 'Android',
  ios: 'iOS',
  node: 'Node',
  spring: 'Spring',
} as const;

export const teamIds = {
  [teamNames.design]: 5,
  [teamNames.web]: 6,
  [teamNames.android]: 7,
  [teamNames.ios]: 8,
  [teamNames.node]: 9,
  [teamNames.spring]: 10,
} as const;

export type Teams = ValueOf<typeof teamUrls>;
export type TeamNames = ValueOf<typeof teamNames>;
export type TeamIds = ValueOf<typeof teamIds>;
