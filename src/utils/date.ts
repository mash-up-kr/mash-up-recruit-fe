import { KeyOf } from '@/types';
import { RECRUIT_DATE } from '@/constants';
import { objectKeys } from './object';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export type RecruitingProgressStatus =
  | 'PREVIOUS'
  | 'IN-RECRUITING' // 지원하기 버튼 enabled
  | 'END-RECRUITING' // 지원하기 버튼 disabled
  | 'AFTER-SCREENING-ANNOUNCED' // 지원 현황 서류 검토 -> 서류 결과 발표
  | 'AFTER-INTERVIEWING-ANNOUNCED' // 지원 현황 서류 결과 발표 -> 최종 합격 발표
  | 'AFTER-FIRST-SEMINAR' // 지원 현황 결과 발표 숨김
  | 'INVALID';

const getKSTDateFromDate = (date: Date) => {
  const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const diffKSTFromUTC = 9 * 60 * 60 * 1000;
  return new Date(utcUnixTime + diffKSTFromUTC);
};

export const getRecruitingProgressStatusFromRecruitingPeriod = (
  date: Date,
): RecruitingProgressStatus => {
  const kstDate = getKSTDateFromDate(date);
  const currentDate = date.getTime() === kstDate.getTime() ? date : kstDate;

  if (currentDate < RECRUIT_DATE.RECRUITMENT_START_KST_DATE) {
    return 'PREVIOUS';
  }
  if (
    RECRUIT_DATE.RECRUITMENT_START_KST_DATE <= currentDate &&
    currentDate <= RECRUIT_DATE.RECRUITMENT_END_KST_DATE
  ) {
    return 'IN-RECRUITING';
  }
  if (
    RECRUIT_DATE.RECRUITMENT_END_KST_DATE < currentDate &&
    currentDate < RECRUIT_DATE.SCREENING_RESULT_ANNOUNCED_KST_DATE
  ) {
    return 'END-RECRUITING';
  }
  if (
    RECRUIT_DATE.SCREENING_RESULT_ANNOUNCED_KST_DATE <= currentDate &&
    currentDate < RECRUIT_DATE.INTERVIEW_RESULT_ANNOUNCED_KST_DATE
  ) {
    return 'AFTER-SCREENING-ANNOUNCED';
  }
  if (
    RECRUIT_DATE.INTERVIEW_RESULT_ANNOUNCED_KST_DATE <= currentDate &&
    currentDate < RECRUIT_DATE.AFTER_FIRST_SEMINAR_JOIN_KST_DATE
  ) {
    return 'AFTER-INTERVIEWING-ANNOUNCED';
  }
  if (RECRUIT_DATE.AFTER_FIRST_SEMINAR_JOIN_KST_DATE <= currentDate) {
    return 'AFTER-FIRST-SEMINAR';
  }
  return 'INVALID';
};

export const getValueOfDateIntoObj = (dateInstance: Date) => {
  const month = dateInstance.getMonth() + 1;
  const date = dateInstance.getDate();
  const hour24Format = dateInstance.getHours();
  const isAfternoon = dateInstance.getHours() >= 12;
  const hour12Format = hour24Format > 12 ? hour24Format - 12 : hour24Format;
  const minute = dateInstance.getMinutes().toString().padStart(2, '0');
  const day = dateInstance.getDay();
  const dayKr = DAYS[dateInstance.getDay()];

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
