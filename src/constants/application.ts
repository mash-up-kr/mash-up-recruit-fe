export const CURRENT_GENERATION = 16;

// 모집 일정을 빌드 타임에 한 번만 읽으면, 그때 API가 비어 있을 경우 재배포 전까지 복구되지 않는다.
export const RECRUIT_SCHEDULE_REVALIDATE_SECONDS = 60;

export const ERROR_CODE = {
  APPLICATION_MODIFICATION_NOT_ALLOWED: 'APPLICATION_MODIFICATION_NOT_ALLOWED', // 지원 기간 마감
} as const;
