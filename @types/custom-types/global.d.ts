declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export {};
