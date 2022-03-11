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
import { useState } from 'react';
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
  isSubmitted: boolean;
}

const ApplyLayout = ({ heading, role, application, isSubmitted }: ApplyLayoutProps) => {
  const [isOpenAlreadySubmittedModal, setIsOpenAlreadySubmittedModal] = useState(isSubmitted);
  const [isOpenTempSavedModal, setIsOpenTempSavedModal] = useState(
    application.status === 'WRITING',
  );
  return (
    <>
      <Styled.Layout>
        <Styled.ApplyHeading>지원서 작성</Styled.ApplyHeading>
        <section>
          <Styled.PlatformHeading>{heading}</Styled.PlatformHeading>
          <Styled.PlatformRole>{role}</Styled.PlatformRole>
          <ApplyForm application={application} isSubmitted={isSubmitted} />
        </section>
      </Styled.Layout>
      {isOpenAlreadySubmittedModal && (
        <AlertModalDialog
          heading="이미 제출한 지원서가 존재합니다."
          paragraph="이미 한 번 지원서를 제출하셨다면 이제 또 다른 지원서는 제출하지 못합니다."
          setIsOpenModal={setIsOpenAlreadySubmittedModal}
          handleApprovalButton={() => setIsOpenAlreadySubmittedModal(false)}
        />
      )}
      {isOpenTempSavedModal && !isSubmitted && (
        <AlertModalDialog
          heading="이미 작성 중이던 지원서가 있습니다."
          paragraph="작성 중이던 지원서 내용을 불러왔습니다."
          setIsOpenModal={setIsOpenTempSavedModal}
          handleApprovalButton={() => setIsOpenTempSavedModal(false)}
        />
      )}
    </>
  );
};

export default ApplyLayout;
