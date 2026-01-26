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
      address: '서울 강남구 선릉로 410 3층',
      mapUrl: 'https://naver.me/5asmIxwS',
    },
    Web: {
      type: 'OFFLINE',
      address:
        '서울시 강서구 마곡중앙8로 71 E13동 1층(마곡동 789) \n' +
        'Lg sciencepark 바위가 있는 쪽 입구 \n' +
        '(범한기술원 건너편 입구)',
      mapUrl: 'https://naver.me/FytJPljP',
    },
    Android: {
      type: 'OFFLINE',
      address: '서울 서초구 서초대로40길 83 우제빌딩 2층',
      mapUrl: 'https://naver.me/xyTMbrXQ',
    },
    iOS: {
      type: 'OFFLINE',
      address: '서울 서초구 서초대로40길 83 우제빌딩 2층',
      mapUrl: 'https://naver.me/xyTMbrXQ',
    },
    Node: {
      type: 'OFFLINE',
      address:
        '서울시 강서구 마곡중앙8로 71 E13동 1층(마곡동 789) \n' +
        'Lg sciencepark 바위가 있는 쪽 입구 \n' +
        '(범한기술원 건너편 입구)',
      mapUrl: 'https://naver.me/FytJPljP',
    },
    Spring: {
      type: 'OFFLINE',
      address:
        '서울시 강서구 마곡중앙8로 71 E13동 1층(마곡동 789) \n' +
        'Lg sciencepark 바위가 있는 쪽 입구 \n' +
        '(범한기술원 건너편 입구)',
      mapUrl: 'https://naver.me/FytJPljP',
    },
  },
} as const;

export const SEMINAR_RUNNING_HOUR = 3;

// 리크루팅에 대한 지원자들의 피드백을 받기 위한 구글 폼 링크
export const RECRUIT_FEEDBACK_GOOGLE_FORM = 'https://forms.gle/TFAtaGeHJYhAW5CCA';
