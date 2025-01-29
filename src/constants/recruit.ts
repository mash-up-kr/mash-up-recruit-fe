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
  '2025-02-22': {
    Design: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
    Web: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
    Android: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
    iOS: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
    Node: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
    Spring: {
      type: 'OFFLINE',
      address: '서울 강남구 테헤란로 133 한국타이어빌딩 18층(마켓컬리)',
      mapUrl: 'https://naver.me/GL8WMOyB',
    },
  },
} as const;

export const SEMINAR_RUNNING_HOUR = 3;
