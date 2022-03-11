// max-width 기준
export const breakPoint = {
  value: {
    mobile: 576,
    tabletS: 767,
    tabletL: 1279,
  },
  media: {
    mobile: '576px',
    tabletS: '767px',
    tabletL: '1279px',
    // 1280px부터 Desktop
  },
} as const;

export type BreakPointTheme = typeof breakPoint;
