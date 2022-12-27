import { HOME_PAGE, PREFIX } from '@/constants';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const blockedPaths = Object.values(PREFIX);

export function middleware(request: NextRequest) {
  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod(new Date());
  const { pathname } = request.nextUrl;

  const isBlockedPath = blockedPaths.find((path) => pathname.includes(path));

  if (isBlockedPath && recruitingProgressStatus === 'PREVIOUS') {
    const url = request.nextUrl.clone();
    url.pathname = HOME_PAGE;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
