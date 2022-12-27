import { teamUrls } from './team';

export const NOT_FOUND_PAGE = '/not-found';
export const ERROR_PAGE = '/error';

export const HOME_PAGE = '/';
export const RECRUIT_DETAILS_ID = 'recruit-details';

export const PREFIX = {
  APPLY: 'apply',
  FAQ: 'faq',
  MY_PAGE: 'my-page',
  RECRUIT: 'recruit',
};

export const APPLY_FRONT_END_PAGE = `/${PREFIX.APPLY}/${teamUrls.web}`;
export const APPLY_DESIGN_PAGE = `/${PREFIX.APPLY}/${teamUrls.design}`;
export const APPLY_NODE_PAGE = `/${PREFIX.APPLY}/${teamUrls.node}`;
export const APPLY_SPRING_PAGE = `/${PREFIX.APPLY}/${teamUrls.spring}`;
export const APPLY_IOS_PAGE = `/${PREFIX.APPLY}/${teamUrls.ios}`;
export const APPLY_ANDROID_PAGE = `/${PREFIX.APPLY}/${teamUrls.android}`;

export const FAQ_COMMON_PAGE = `/${PREFIX.FAQ}/common`;
export const FAQ_FRONT_END_PAGE = `/${PREFIX.FAQ}/${teamUrls.web}`;
export const FAQ_DESIGN_PAGE = `/${PREFIX.FAQ}/${teamUrls.design}`;
export const FAQ_NODE_PAGE = `/${PREFIX.FAQ}/${teamUrls.node}`;
export const FAQ_SPRING_PAGE = `/${PREFIX.FAQ}/${teamUrls.spring}`;
export const FAQ_IOS_PAGE = `/${PREFIX.FAQ}/${teamUrls.ios}`;
export const FAQ_ANDROID_PAGE = `/${PREFIX.FAQ}/${teamUrls.android}`;

export const MY_PAGE_ACCOUNT = `/${PREFIX.MY_PAGE}/account`;
export const MY_PAGE_APPLY_STATUS = `/${PREFIX.MY_PAGE}/apply-status`;
export const MY_PAGE_APPLICATION_DETAIL = `/${PREFIX.MY_PAGE}/application-detail`; // 사용시 `/${id}` 넣어줄것 (동적 라우트)

export const RECRUIT_FRONT_END_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.web}`;
export const RECRUIT_DESIGN_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.design}`;
export const RECRUIT_IOS_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.ios}`;
export const RECRUIT_ANDROID_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.android}`;
export const RECRUIT_NODE_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.node}`;
export const RECRUIT_SPRING_PAGE = `/${PREFIX.RECRUIT}/${teamUrls.spring}`;

export const PATH_NAME = {
  APPLY_PAGE: `/${PREFIX.APPLY}/[platformName]`,
  FAQ_PAGE: `/${PREFIX.FAQ}/[platformName]`,
  MY_PAGE_ACCOUNT: `/${PREFIX.MY_PAGE}/account`,
  MY_PAGE_APPLY_STATUS: `/${PREFIX.MY_PAGE}/apply-status`,
  MY_PAGE_APPLICATION_DETAIL: `/${PREFIX.MY_PAGE}/application-detail/[applicationId]`,
  RECRUIT_PAGE: `/${PREFIX.RECRUIT}/[platformName]`,
};
