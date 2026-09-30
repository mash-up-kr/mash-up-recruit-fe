export const CURRENT_GENERATION = 16;

// 모집 일정을 빌드 타임에 한 번만 읽으면, 그때 API가 비어 있을 경우 재배포 전까지 복구되지 않는다.
// ISR이므로 "60초마다 갱신"이 아니라 "캐시가 60초 지난 뒤 들어온 첫 요청"에서 백그라운드
// 재생성이 시작되고, 그 요청은 아직 이전 값을 받는다. 요청이 없으면 갱신도 일어나지 않는다.
export const RECRUIT_SCHEDULE_REVALIDATE_SECONDS = 60;

export const ERROR_CODE = {
  APPLICATION_MODIFICATION_NOT_ALLOWED: 'APPLICATION_MODIFICATION_NOT_ALLOWED', // 지원 기간 마감
} as const;
