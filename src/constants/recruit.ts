import { TeamName } from '@/types/dto';

type InterviewTypeEn = 'ONLINE' | 'OFFLINE';
type InterviewTypeKr = '온라인' | '오프라인';

export const INTERVIEW_TYPE: Record<InterviewTypeEn, InterviewTypeKr> = {
  OFFLINE: '오프라인',
  ONLINE: '온라인',
} as const;

export const INTERVIEW_LOCATION: {
  [date: string]: Record<TeamName, { address: string; mapUrl: string; type: InterviewTypeEn }>;
} = {
  '2026-02-21': {
    Design: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
    Web: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
    Android: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
    iOS: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
    Node: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
    Spring: {
      type: 'OFFLINE',
      address: '개별 공지',
      mapUrl: '',
    },
  },
} as const;

export const SEMINAR_RUNNING_HOUR = 3;
