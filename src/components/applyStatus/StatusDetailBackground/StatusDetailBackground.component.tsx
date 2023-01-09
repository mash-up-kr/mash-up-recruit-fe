import { ReactNode } from 'react';
import cake from '@/assets/images/mashong-cake-2x-min.png';
import coffee from '@/assets/images/mashong-coffee-2x-min.png';
import win from '@/assets/images/mashong-win-2x-min.png';
import basic from '@/assets/images/mashong-basic-2x-min.png';
import working from '@/assets/images/mashong-working-2x-min.png';
import { KeyOf } from '@/types';
import Image from 'next/image';
import * as Styled from './StatusDetailBackground.styled';

const mashongImages = {
  cake,
  coffee,
  win,
  basic,
  working,
} as const;

type MashongImage = KeyOf<typeof mashongImages>;

interface StatusDetailBackgroundProps {
  children: ReactNode;
  imageType?: MashongImage;
  contentSize?: 'l' | 's' | 'xs';
}

const StatusDetailBackground = ({
  children,
  imageType,
  contentSize = 'l',
}: StatusDetailBackgroundProps) => {
  return (
    <Styled.StatusDetailBackground contentSize={contentSize}>
      {children}
      {imageType && (
        <Styled.ImageWrapper>
          <Image src={mashongImages[imageType].src} alt="" layout="fill" />
        </Styled.ImageWrapper>
      )}
    </Styled.StatusDetailBackground>
  );
};

export default StatusDetailBackground;
