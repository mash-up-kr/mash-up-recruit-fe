const PRODUCTION_URL = 'https://recruit.mash-up.kr';

export const isProduction =
  process.env.NODE_ENV === 'production' && process.env.BASE_URL === PRODUCTION_URL;
