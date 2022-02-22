import { AlertModalDialog, ApplyForm } from '@/components';
import {
  APPLY_ANDROID_PAGE,
  APPLY_DESIGN_PAGE,
  APPLY_FRONT_END_PAGE,
  APPLY_IOS_PAGE,
  APPLY_NODE_PAGE,
  APPLY_SPRING_PAGE,
} from '@/constants';
import { Application } from '@/types/dto';
import { Dispatch, SetStateAction, useState } from 'react';
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
  isSubmited: boolean;
}

const ApplyLayout = ({
  heading,
  role,
  application,
  isOpenSuccessSubmitedModal,
  setIsOpenSuccessSubmitedModal,
  isSubmited,
}: ApplyLayoutProps) => {
  const [isOpenAlreadySubmitedModal, setIsOpenAlreadySubmitedModal] = useState(isSubmited);
  return (
    <>
      <Styled.Layout>
        <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
        <section>
          <Styled.PlatformHeading>{heading}</Styled.PlatformHeading>
          <Styled.PlatformRole>{role}</Styled.PlatformRole>
          <ApplyForm
            application={application}
            isOpenSuccessSubmitedModal={isOpenSuccessSubmitedModal}
            setIsOpenSuccessSubmitedModal={setIsOpenSuccessSubmitedModal}
            isSubmited={isSubmited}
          />
        </section>
      </Styled.Layout>
      {isOpenAlreadySubmitedModal && (
        <AlertModalDialog
          heading="1인 1팀 1지원만 가능합니다!"
          paragraph="이미 한 번 지원서를 제출하셨다면 이제 또 다른 지원서는 제출하지 못합니다."
          setIsOpenModal={setIsOpenAlreadySubmitedModal}
          handleApprovalButton={() => setIsOpenAlreadySubmitedModal(false)}
        />
      )}
    </>
  );
};

export default ApplyLayout;
