export const AOS_DEFAULT_DURATION = 600;
export const AOS_BASE_DURATION_DISTANCE = 200;

export const aosDefaultConfig = {
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: true,
  disableMutationObserver: true,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: AOS_DEFAULT_DURATION,
  easing: 'ease',
  once: false,
  mirror: false,
} as const;
