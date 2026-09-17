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
  const { pathname } = request.nextUrl;

  // 홈은 차단 대상이 아니므로 일정 조회 없이 통과시킨다.
  if (pathname === HOME_PAGE) {
    return NextResponse.next();
  }

  const isBlockedPath = blockedPaths.find((path) => pathname.includes(path));

  const recruitScheduleResponse = await fetch(
    `${process.env.BASE_URL}/api/applications/schedule/${CURRENT_GENERATION}`,
  );

  if (!recruitScheduleResponse.ok) {
    // 404는 해당 기수 일정이 아직 등록되지 않은 상태이므로 페이지를 열어 둔다.
    // 일정이 없을 때의 처리는 각 페이지가 담당한다. (지원 버튼 비활성, /apply는 자체 리다이렉트)
    if (recruitScheduleResponse.status === 404 || !isBlockedPath) {
      return NextResponse.next();
    }

    // 그 외 실패(5xx 등)는 기존처럼 차단 경로만 홈으로 보낸다.
    // 홈은 위에서 항상 통과시키므로 홈 -> 홈 무한 리다이렉트는 발생하지 않는다.
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

  if (isBlockedPath && recruitingProgressStatus === 'PREVIOUS') {
    const url = request.nextUrl.clone();
    url.pathname = HOME_PAGE;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
