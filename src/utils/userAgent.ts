export const getInAppBrowser = (navigator: Navigator) => {
  const { userAgent: ua } = navigator;

  switch (true) {
    case /KAKAO/i.test(ua):
      return 'KAKAO';
    case /INSTAGRAM/i.test(ua):
      return 'INSTAGRAM';
    case /NAVER/i.test(ua):
      return 'NAVER';
    case /\[FB/i.test(ua):
      return 'FACEBOOK';
    case /campuspickApp/i.test(ua):
      return 'CAMPUS_PICK';
    case /everytimeApp/i.test(ua):
      return 'EVERY_TIME';
    case /LinkedInApp/i.test(ua):
      return 'LINKEDIN';
    default:
      return null;
  }
};

export type InAppBrowser = NonNullable<ReturnType<typeof getInAppBrowser>>;

const getUserAgentBrowser = (navigator: Navigator) => {
  const { userAgent: ua, vendor } = navigator;
  const android = /(android)/i.test(ua);

  switch (true) {
    case /NAVER|KAKAO|Instagram|\[FB|campuspickApp|everytimeApp|LinkedInApp/i.test(ua):
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

const getUserAgentOS = (navigator: Navigator) => {
  const { userAgent: ua, platform } = navigator;
  switch (true) {
    case /Android/.test(ua):
      return 'Android';
    case /iPhone|iPad|iPod/.test(platform):
      return 'iOS';
    case /Win/.test(platform):
      return 'Windows';
    case /Mac/.test(platform):
      return 'Mac';
    case /CrOS/.test(ua):
      return 'Chrome OS';
    case /Firefox/.test(ua):
      return 'Firefox OS';
    default:
      return null;
  }
};

export type UserAgentOS = NonNullable<ReturnType<typeof getUserAgentOS>>;

export const detectOS = (os: UserAgentOS) => {
  return getUserAgentOS(window.navigator) === os;
};
