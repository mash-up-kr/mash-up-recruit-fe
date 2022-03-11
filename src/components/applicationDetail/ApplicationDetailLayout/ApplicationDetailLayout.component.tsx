import { ApplyForm } from '@/components';
import { Application, TeamName } from '@/types/dto';
import * as Styled from './ApplicationDetailLayout.styled';

export const PLATFORM_HEADINGS: Record<TeamName, string> = {
  Design: 'Product Design Team',
  Android: 'Android Team',
  iOS: 'iOS Team',
  Web: 'Web Team',
  Node: 'Node Team',
  Spring: 'Spring Team',
} as const;

export const PLATFORM_ROLE: Record<TeamName, string> = {
  Web: 'Frontend Developer',
  Android: 'Android Developer',
  Design: 'Product Designer',
  iOS: 'iOS Developer',
  Node: 'Backend Developer',
  Spring: 'Backend Developer',
} as const;

interface ApplicationDetailLayoutProps {
  application: Application;
  isSubmitted: boolean;
}

const ApplicationDetailLayout = ({ application, isSubmitted }: ApplicationDetailLayoutProps) => {
  return (
    <section>
      <Styled.ApplicationDetailHeadingWrapper>
        <Styled.ApplicationDetailHeadingInner>
          <Styled.ApplicationDetailHeading>지원서 상세</Styled.ApplicationDetailHeading>
          <Styled.PlatformHeading>
            {PLATFORM_HEADINGS[application.team.name]}
          </Styled.PlatformHeading>
          <Styled.PlatformRole>{PLATFORM_ROLE[application.team.name]}</Styled.PlatformRole>
        </Styled.ApplicationDetailHeadingInner>
      </Styled.ApplicationDetailHeadingWrapper>
      <Styled.Layout>
        <ApplyForm application={application} isSubmitted={isSubmitted} />
      </Styled.Layout>
    </section>
  );
};

export default ApplicationDetailLayout;
