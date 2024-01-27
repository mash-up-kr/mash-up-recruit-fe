import { ValueOf } from '@/types';
import { TeamName } from '@/types/dto';

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

export const TEAM_NICK_NAME: Record<TeamName, string> = {
  Design: 'Product Design Team',
  Android: 'Android Team',
  iOS: 'iOS Team',
  Web: 'Web Team',
  Node: 'Node Team',
  Spring: 'Spring Team',
} as const;

export type Teams = ValueOf<typeof teamUrls>;
export type TeamNames = ValueOf<typeof teamNames>;
