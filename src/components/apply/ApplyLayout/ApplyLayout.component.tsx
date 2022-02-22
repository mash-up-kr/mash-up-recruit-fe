import { ApplyForm } from '@/components';
import {
  APPLY_ANDROID_PAGE,
  APPLY_DESIGN_PAGE,
  APPLY_FRONT_END_PAGE,
  APPLY_IOS_PAGE,
  APPLY_NODE_PAGE,
  APPLY_SPRING_PAGE,
} from '@/constants';
import { Application } from '@/types/dto';
import { Dispatch, SetStateAction } from 'react';
import * as Styled from './ApplyLayout.styled';

export const PLATFORM_HEADINGS = {
  [APPLY_FRONT_END_PAGE]: 'Web Team',
  [APPLY_ANDROID_PAGE]: 'Android Team',
  [APPLY_DESIGN_PAGE]: 'Product Design Team',
  [APPLY_IOS_PAGE]: 'iOS Team',
  [APPLY_NODE_PAGE]: 'Node Team',
  [APPLY_SPRING_PAGE]: 'Spring Team',
} as const;

export const PLATFORM_ROLE = {
  [APPLY_FRONT_END_PAGE]: 'Frontend Developer',
  [APPLY_ANDROID_PAGE]: 'Android Developer',
  [APPLY_DESIGN_PAGE]: 'Product Designer',
  [APPLY_IOS_PAGE]: 'iOS Developer',
  [APPLY_NODE_PAGE]: 'Backend Developer',
  [APPLY_SPRING_PAGE]: 'Backend Developer',
} as const;

export type PlatformHeadings = typeof PLATFORM_HEADINGS;

interface ApplyLayoutProps {
  heading: string;
  role: string;
  application: Application;
  isOpenSuccessSubmitedModal: boolean;
  setIsOpenSuccessSubmitedModal: Dispatch<SetStateAction<boolean>>;
}

const ApplyLayout = ({
  heading,
  role,
  application,
  isOpenSuccessSubmitedModal,
  setIsOpenSuccessSubmitedModal,
}: ApplyLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
      <section>
        <Styled.PlatformHeading>{heading}</Styled.PlatformHeading>
        <Styled.PlatformRole>{role}</Styled.PlatformRole>
        <ApplyForm
          application={application}
          isOpenSuccessSubmitedModal={isOpenSuccessSubmitedModal}
          setIsOpenSuccessSubmitedModal={setIsOpenSuccessSubmitedModal}
        />
      </section>
    </Styled.Layout>
  );
};

export default ApplyLayout;
