// max-width 기준
export const breakPoint = {
  value: {
    mobile: 576,
    tabletS: 767,
    tabletL: 1439,
  },
  media: {
    mobile: '576px',
    tabletS: '767px',
    tabletL: '1439px',
  },
} as const;

export type BreakPointTheme = typeof breakPoint;
