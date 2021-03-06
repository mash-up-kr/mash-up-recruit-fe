export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray5: '#F8F9FA',
  gray10: '#F1F3F5',
  gray20: '#E9ECEF',
  gray30: '#DEE2E6',
  gray40: '#CED4DA',
  gray50: '#ADB5BD',
  gray60: '#868E96',
  gray70: '#495057',
  gray80: '#343A40',
  gray90: '#212529',
  gray95: '#121314',
  purple80: '#4127D1',
  purple70: '#6244FF',
  purple60: '#836BFF',
  purple40: '#C2B6FF',
  purple20: '#E8E4FF',
  purple10: '#F1EFFF',
  red10: '#FFEFF2',
  red20: '#FFE2E7',
  red40: '#FFC4CF',
  red50: '#F35D78',
  red70: '#FC4162',
  green20: '#E4F8F4',
  green70: '#0FB093',
} as const;

export type ColorType = typeof colors;
