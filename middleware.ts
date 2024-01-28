import { CURRENT_GENERATION, HOME_PAGE, PREFIX } from '@/constants';
import { RecruitScheduleArray } from '@/types/dto';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const blockedPaths = Object.values(PREFIX);

export async function middleware(request: NextRequest) {
  const recruitScheduleResponse = await fetch(
    `https://api.dev-recruit.mash-up.kr/api/v1/applications/schedule/${CURRENT_GENERATION}`,
  );

  if (!recruitScheduleResponse.ok) {
    const url = request.nextUrl.clone();
    url.pathname = HOME_PAGE;
    return NextResponse.redirect(url);
  }

  const { data: recruitSchedules }: { data: RecruitScheduleArray } =
    await recruitScheduleResponse.json();

  const recruitSchedule = generateRecruitSchedule(recruitSchedules);

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });
  const { pathname } = request.nextUrl;

  const isBlockedPath = blockedPaths.find((path) => pathname.includes(path));

  if (isBlockedPath && recruitingProgressStatus === 'PREVIOUS') {
    const url = request.nextUrl.clone();
    url.pathname = HOME_PAGE;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
