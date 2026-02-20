import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { KeyOf } from '@/types';
import { DAYS } from '@/constants';
import { RecruitSchedule, RecruitScheduleArray } from '@/types/dto';
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
  const now = date.getTime();

  if (now < recruitSchedule.RECRUITMENT_STARTED.getTime()) {
    return 'PREVIOUS';
  }
  if (
    recruitSchedule.RECRUITMENT_STARTED.getTime() <= now &&
    now <= recruitSchedule.RECRUITMENT_ENDED.getTime()
  ) {
    return 'IN-RECRUITING';
  }
  if (
    recruitSchedule.RECRUITMENT_ENDED.getTime() < now &&
    now < recruitSchedule.SCREENING_RESULT_ANNOUNCED.getTime()
  ) {
    return 'END-RECRUITING';
  }
  if (
    recruitSchedule.SCREENING_RESULT_ANNOUNCED.getTime() <= now &&
    now < recruitSchedule.INTERVIEW_RESULT_ANNOUNCED.getTime()
  ) {
    return 'AFTER-SCREENING-ANNOUNCED';
  }
  if (
    recruitSchedule.INTERVIEW_RESULT_ANNOUNCED.getTime() <= now &&
    now < recruitSchedule.AFTER_FIRST_SEMINAR_JOIN.getTime()
  ) {
    return 'AFTER-INTERVIEWING-ANNOUNCED';
  }
  if (recruitSchedule.AFTER_FIRST_SEMINAR_JOIN.getTime() <= now) {
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
