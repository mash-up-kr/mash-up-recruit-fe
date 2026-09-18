import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { KeyOf } from '@/types';
import { DAYS } from '@/constants';
import { RecruitSchedule, RecruitScheduleArray, RecruitScheduleEvent } from '@/types/dto';
import { objectKeys } from './object';

dayjs.extend(utc);
dayjs.extend(timezone);

export const dayjsKST = (date?: dayjs.ConfigType): Dayjs => dayjs(date).tz('Asia/Seoul');

export type RecruitingProgressStatus =
  | 'PREVIOUS'
  | 'IN-RECRUITING' // 지원하기 버튼 enabled
  | 'END-RECRUITING' // 지원하기 버튼 disabled
  | 'AFTER-SCREENING-ANNOUNCED' // 지원 현황 서류 검토 -> 서류 결과 발표
  | 'AFTER-INTERVIEWING-ANNOUNCED' // 지원 현황 서류 결과 발표 -> 최종 합격 발표
  | 'AFTER-FIRST-SEMINAR' // 지원 현황 결과 발표 숨김
  | 'INVALID';

// 날짜가 없거나(undefined) 유효하지 않으면 NaN을 반환한다. NaN과의 비교는 항상 false이므로
// 해당 날짜가 필요한 분기만 건너뛰고, 판정할 수 없으면 최종적으로 INVALID에 도달한다.
const getTimeOrNaN = (value: Date | undefined): number =>
  value instanceof Date ? value.getTime() : NaN;

const RECRUIT_SCHEDULE_EVENTS: RecruitScheduleEvent[] = [
  'RECRUITMENT_STARTED',
  'RECRUITMENT_ENDED',
  'SCREENING_RESULT_ANNOUNCED',
  'INTERVIEW_START',
  'INTERVIEW_END',
  'INTERVIEW_RESULT_ANNOUNCED',
  'AFTER_FIRST_SEMINAR_JOIN',
];

// 일정이 하나라도 비면 dayjs(undefined)가 '현재 시각'을 반환해 모든 날짜가 오늘로 렌더링된다.
// 날짜를 그리는 쪽은 렌더 전에 이 검사를 통과시켜야 한다.
export const isRecruitScheduleComplete = (recruitSchedule: RecruitSchedule): boolean =>
  RECRUIT_SCHEDULE_EVENTS.every((event) => !Number.isNaN(getTimeOrNaN(recruitSchedule[event])));

export const getRecruitingProgressStatusFromRecruitingPeriod = ({
  date,
  recruitSchedule,
}: {
  date: Date;
  recruitSchedule: RecruitSchedule | null;
}): RecruitingProgressStatus => {
  if (recruitSchedule === null) {
    return 'INVALID';
  }

  // (20260215) AWS 환경에서의 타임존 이슈로 인해, date 객체를 timestamp로 변환하여 비교하도록 수정
  // API가 일정을 비워 주면(예: 해당 기수 일정 미등록) generateRecruitSchedule이 빈 객체를 반환하므로,
  // 각 날짜는 getTimeOrNaN으로 읽어 undefined에 .getTime()을 호출하지 않도록 한다.
  const now = date.getTime();

  if (now < getTimeOrNaN(recruitSchedule.RECRUITMENT_STARTED)) {
    return 'PREVIOUS';
  }
  if (
    getTimeOrNaN(recruitSchedule.RECRUITMENT_STARTED) <= now &&
    now <= getTimeOrNaN(recruitSchedule.RECRUITMENT_ENDED)
  ) {
    return 'IN-RECRUITING';
  }
  if (
    getTimeOrNaN(recruitSchedule.RECRUITMENT_ENDED) < now &&
    now < getTimeOrNaN(recruitSchedule.SCREENING_RESULT_ANNOUNCED)
  ) {
    return 'END-RECRUITING';
  }
  if (
    getTimeOrNaN(recruitSchedule.SCREENING_RESULT_ANNOUNCED) <= now &&
    now < getTimeOrNaN(recruitSchedule.INTERVIEW_RESULT_ANNOUNCED)
  ) {
    return 'AFTER-SCREENING-ANNOUNCED';
  }
  if (
    getTimeOrNaN(recruitSchedule.INTERVIEW_RESULT_ANNOUNCED) <= now &&
    now < getTimeOrNaN(recruitSchedule.AFTER_FIRST_SEMINAR_JOIN)
  ) {
    return 'AFTER-INTERVIEWING-ANNOUNCED';
  }
  if (getTimeOrNaN(recruitSchedule.AFTER_FIRST_SEMINAR_JOIN) <= now) {
    return 'AFTER-FIRST-SEMINAR';
  }
  return 'INVALID';
};

export const getValueOfDateIntoObj = (dateInstance: Dayjs) => {
  const month = dateInstance.month() + 1;
  const date = dateInstance.date();
  const hour24Format = dateInstance.hour();
  const isAfternoon = hour24Format >= 12;
  const hour12Format = hour24Format > 12 ? hour24Format - 12 : hour24Format;
  const minute = dateInstance.minute().toString().padStart(2, '0');
  const day = dateInstance.day();
  const dayKr = DAYS[day];

  return { month, date, hour24Format, hour12Format, isAfternoon, minute, day, dayKr };
};

const DATE_DIFFERENCE_DEFINITION = {
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1,
} as const;

const DATE_DIFFERENCE_KEYS = objectKeys(DATE_DIFFERENCE_DEFINITION);

export type DateDifference = Record<KeyOf<typeof DATE_DIFFERENCE_DEFINITION>, number>;

export const getDifferenceOfDates = (startDate: Date, endDate: Date): DateDifference => {
  let delta = endDate.getTime() - startDate.getTime();
  return DATE_DIFFERENCE_KEYS.reduce<DateDifference>((dateDifference, key) => {
    const calculatedValueByKey = Math.floor(delta / DATE_DIFFERENCE_DEFINITION[key]);
    delta -= calculatedValueByKey * DATE_DIFFERENCE_DEFINITION[key];
    return Object.assign(dateDifference, { [key]: calculatedValueByKey });
  }, {} as DateDifference);
};

export const generateRecruitSchedule = (recruitScheduleArray: RecruitScheduleArray) => {
  return recruitScheduleArray.reduce<RecruitSchedule>((acc, { eventName, eventOccurredAt }) => {
    return { ...acc, [eventName]: new Date(eventOccurredAt) };
  }, {} as RecruitSchedule);
};
