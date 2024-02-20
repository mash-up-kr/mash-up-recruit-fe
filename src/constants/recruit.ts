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
  '2024-02-24': {
    Design: {
      type: 'OFFLINE',
      address: '분당구 판교로 242 PDC A동 902호 구름 스퀘어',
      mapUrl: 'https://naver.me/GmFlempF',
    },
    Web: {
      type: 'ONLINE',
      address: 'Zoom 링크',
      mapUrl: 'https://us02web.zoom.us/j/84144059012?pwd=Um1SWDZYbjc5QkxOckhoSS9Qc2hoUT09',
    },
    Android: {
      type: 'OFFLINE',
      address: '분당구 판교로 242 PDC A동 902호 구름 스퀘어',
      mapUrl: 'https://naver.me/GmFlempF',
    },
    iOS: {
      type: 'OFFLINE',
      address: '분당구 판교로 242 PDC A동 902호 구름 스퀘어',
      mapUrl: 'https://naver.me/GmFlempF',
    },
    Node: {
      type: 'OFFLINE',
      address: '분당구 판교로 242 PDC A동 902호 구름 스퀘어',
      mapUrl: 'https://naver.me/GmFlempF',
    },
    Spring: {
      type: 'OFFLINE',
      address: '서울 서초구 서초대로 77길 17 11층',
      mapUrl: 'https://naver.me/GOuQ2Ip0',
    },
  },
  '2024-02-25': {
    Design: {
      type: 'OFFLINE',
      address: '분당구 판교로 242 PDC A동 902호 구름 스퀘어',
      mapUrl: 'https://naver.me/GmFlempF',
    },
    Web: {
      type: 'ONLINE',
      address: 'Zoom 링크',
      mapUrl: 'https://us02web.zoom.us/j/84144059012?pwd=Um1SWDZYbjc5QkxOckhoSS9Qc2hoUT09',
    },
    Android: {
      type: 'OFFLINE',
      address: 'Open UP (서울 서초구 서초대로40길 83 우제빌딩 2층)',
      mapUrl: 'https://naver.me/Fn2s6XYI',
    },
    iOS: {
      type: 'OFFLINE',
      address: 'Open UP (서울 서초구 서초대로40길 83 우제빌딩 2층)',
      mapUrl: 'https://naver.me/Fn2s6XYI',
    },
    Node: {
      type: 'OFFLINE',
      address: '크리스역삼빌딩 3층 버킷스토어 (서울 강남구 논현로 322)',
      mapUrl: 'https://naver.me/x2PYWdY3',
    },
    Spring: {
      type: 'OFFLINE',
      address: '서울 서초구 서초대로 77길 17 11층',
      mapUrl: 'https://naver.me/GOuQ2Ip0',
    },
  },
} as const;
