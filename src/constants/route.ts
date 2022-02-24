import { teamUrls } from './team';

export const HOME_PAGE = '/';

export const APPLY_FRONT_END_PAGE = `/apply/${teamUrls.web}`;
export const APPLY_DESIGN_PAGE = `/apply/${teamUrls.design}`;
export const APPLY_NODE_PAGE = `/apply/${teamUrls.node}`;
export const APPLY_SPRING_PAGE = `/apply/${teamUrls.spring}`;
export const APPLY_IOS_PAGE = `/apply/${teamUrls.ios}`;
export const APPLY_ANDROID_PAGE = `/apply/${teamUrls.android}`;

export const FAQ_COMMON_PAGE = '/faq/common';
export const FAQ_FRONT_END_PAGE = `/faq/${teamUrls.web}`;
export const FAQ_DESIGN_PAGE = `/faq/${teamUrls.design}`;
export const FAQ_NODE_PAGE = `/faq/${teamUrls.node}`;
export const FAQ_SPRING_PAGE = `/faq/${teamUrls.spring}`;
export const FAQ_IOS_PAGE = `/faq/${teamUrls.ios}`;
export const FAQ_ANDROID_PAGE = `/faq/${teamUrls.android}`;

export const MY_PAGE_ACCOUNT = '/my-page/account';
export const MY_PAGE_APPLY_STATUS = '/my-page/apply-status';
export const MY_PAGE_APPLICATION_DETAIL = '/my-page/application-detail'; // 사용시 `/${id}` 넣어줄것 (동적 라우트)

export const RECRUIT_FRONT_END_PAGE = `/recruit/${teamUrls.web}`;
export const RECRUIT_DESIGN_PAGE = `/recruit/${teamUrls.design}`;
export const RECRUIT_IOS_PAGE = `/recruit/${teamUrls.ios}`;
export const RECRUIT_ANDROID_PAGE = `/recruit/${teamUrls.android}`;
export const RECRUIT_NODE_PAGE = `/recruit/${teamUrls.node}`;
export const RECRUIT_SPRING_PAGE = `/recruit/${teamUrls.spring}`;

export const PATH_NAME = {
  APPLY_PAGE: '/apply/[platformName]',
  FAQ_PAGE: '/faq/[platformName]',
  MY_PAGE_ACCOUNT: '/my-page/account',
  MY_PAGE_APPLY_STATUS: '/my-page/apply-status',
  MY_PAGE_APPLICATION_DETAIL: '/my-page/application-detail/[applicationId]',
};
