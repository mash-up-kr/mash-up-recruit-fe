export const RECRUIT_DATE = {
  RECRUITMENT_START_KST_DATE: new Date('2024-01-25T00:00:00+09:00'), // 서류 접수 시작
  RECRUITMENT_END_KST_DATE: new Date('2024-02-14T23:59:59+09:00'), // 서류 접수 종료
  SCREENING_RESULT_ANNOUNCED_KST_DATE: new Date('2024-02-20T21:00:00+09:00'), // 서류 결과 발표
  INTERVIEW_START_KST_DATE: new Date('2024-02-24T00:00:00+09:00'), // 인터뷰 시작
  INTERVIEW_END_KST_DATE: new Date('2024-02-25T23:59:59+09:00'), // 인터뷰 종료
  INTERVIEW_RESULT_ANNOUNCED_KST_DATE: new Date('2024-02-28T21:00:00+09:00'), // 최종 합격 발표
  AFTER_FIRST_SEMINAR_JOIN_KST_DATE: new Date('2024-03-09T17:00:00+09:00'), // 첫번째 세미나 끝나는 시각
} as const;
