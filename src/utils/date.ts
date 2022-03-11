const [RECRUITING_START_KST_DATE, RECRUITING_END_KST_DATE] = [
  new Date('2022-03-02T00:00:00+09:00'),
  new Date('2022-03-15T23:59:59+09:00'),
];

type RecruitingProgressStatus = 'PREVIOUS' | 'IN-PROGRESS' | 'AFTER' | 'INVALID';

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
  if (currentDate < RECRUITING_START_KST_DATE) {
    return 'PREVIOUS';
  }
  if (RECRUITING_START_KST_DATE <= currentDate && currentDate <= RECRUITING_END_KST_DATE) {
    return 'IN-PROGRESS';
  }
  if (RECRUITING_END_KST_DATE < currentDate) {
    return 'AFTER';
  }
  return 'INVALID';
};
