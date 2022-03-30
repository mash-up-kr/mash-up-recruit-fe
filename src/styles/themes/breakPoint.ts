// max-width 기준
export const breakPoint = {
  value: {
    mobile: 576,
    tabletS: 767,
    tabletM: 1023,
    tabletL: 1279,
  },
  media: {
    mobile: '576px',
    tabletS: '767px',
    tabletM: '1023px',
    tabletL: '1279px',
    // 1280px부터 Desktop
  },
} as const;

export type BreakPointTheme = typeof breakPoint;
