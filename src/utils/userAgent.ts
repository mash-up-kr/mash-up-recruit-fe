const getUserAgentBrowser = (navigator: Navigator) => {
  const { userAgent: ua, vendor } = navigator;
  const android = /(android)/i.test(ua);

  switch (true) {
    case /KAKAO/i.test(ua) || /INSTAGRAM/i.test(ua) || /NAVER/i.test(ua) || /\[FB/i.test(ua):
      return 'IN-APP';
    case /CriOS/.test(ua):
      return 'Chrome for iOS';
    case /Edg\//.test(ua):
      return 'Edge';
    case android && /Silk\//.test(ua):
      return 'Silk';
    case /Chrome/.test(ua) && /Google Inc/.test(vendor):
      return 'Chrome';
    case /Firefox\/\d+\.\d+$/.test(ua):
      return 'Firefox';
    case android:
      return 'AOSP';
    case /MSIE|Trident/.test(ua):
      return 'IE';
    case /Safari/.test(ua) && /Apple Computer/.test(ua):
      return 'Safari';
    case /AppleWebKit/.test(ua):
      return 'WebKit';
    default:
      return null;
  }
};

export type UserAgentBrowser = NonNullable<ReturnType<typeof getUserAgentBrowser>>;

export const detectBrowser = (browser: UserAgentBrowser) => {
  return getUserAgentBrowser(window.navigator) === browser;
};
