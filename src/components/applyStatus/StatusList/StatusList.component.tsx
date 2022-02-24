import { MY_PAGE_APPLICATION_DETAIL } from '@/constants';
import { useDetectViewPort } from '@/hooks';
import { Application, ApplicationAuditStatus, TeamName } from '@/types/dto';
import * as Styled from './StatusList.styled';

interface StatusListProps {
  applications: Application[];
}

const STATUS_WORDS: Record<ApplicationAuditStatus, string> = {
  WRITING: '임시저장',
  SUBMITTED: '제출 완료',
  SCREENING_FAILED: '서류 불합격',
  SCREENING_PASSED: '서류 합격',
  SCREENING_EXPIRED: '기한 만료',
  INTERVIEW_FAILED: '면접 불합격',
  INTERVIEW_PASSED: '최종 합격',
};

const TEAM__NICK_NAME: Record<TeamName, string> = {
  Design: 'Product Design Team',
  Android: 'Android Team',
  iOS: 'iOS Team',
  Web: 'Web Team',
  Node: 'Node Team',
  Spring: 'Spring Team',
};

const StatusList = ({ applications }: StatusListProps) => {
  const { size } = useDetectViewPort();
  return (
    <Styled.StatusListSection>
      <Styled.Heading>지원 현황</Styled.Heading>
      <Styled.MainWrapper>
        <Styled.ListWrapper>
          {size === 'desktop' || size === 'tablet_l' ? (
            <>
              <Styled.StatusListHeader>
                <Styled.StatusListHeading>기수</Styled.StatusListHeading>
                <Styled.StatusListHeading>이름</Styled.StatusListHeading>
                <Styled.StatusListHeading>플랫폼</Styled.StatusListHeading>
                <Styled.StatusListHeading>지원 상태</Styled.StatusListHeading>
                <Styled.StatusListHeading>지원서</Styled.StatusListHeading>
              </Styled.StatusListHeader>
              {applications.length === 0 ? (
                <Styled.NoSubmittedApplication>
                  아직 지원하신 내용이 없습니다.
                </Styled.NoSubmittedApplication>
              ) : (
                <Styled.StatusList>
                  {applications.map(({ applicant, team, applicationId, result }) => {
                    return (
                      <Styled.StatusListItem key={applicationId}>
                        <Styled.StatusText>12기</Styled.StatusText>
                        <Styled.StatusText>{applicant.name}</Styled.StatusText>
                        <Styled.StatusText>{TEAM__NICK_NAME[team.name]}</Styled.StatusText>
                        <Styled.StatusText>{STATUS_WORDS[result.status]}</Styled.StatusText>
                        <Styled.DetailLinkWrapper>
                          <Styled.ApplicationDetailLink
                            href={`${MY_PAGE_APPLICATION_DETAIL}/${applicationId}`}
                          >
                            상세보기
                          </Styled.ApplicationDetailLink>
                        </Styled.DetailLinkWrapper>
                      </Styled.StatusListItem>
                    );
                  })}
                </Styled.StatusList>
              )}
            </>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {applications.length === 0 ? (
                <Styled.NoSubmittedApplication>
                  아직 지원하신 내용이 없습니다.
                </Styled.NoSubmittedApplication>
              ) : (
                <Styled.StatusList>
                  {applications.map(({ applicant, team, applicationId, result }) => {
                    return (
                      <Styled.StatusListItem key={applicationId}>
                        <Styled.ListItemWrapper>
                          <Styled.StatusListHeading>기수</Styled.StatusListHeading>
                          <Styled.StatusText>12기</Styled.StatusText>
                        </Styled.ListItemWrapper>
                        <Styled.ListItemWrapper>
                          <Styled.StatusListHeading>이름</Styled.StatusListHeading>
                          <Styled.StatusText>{applicant.name}</Styled.StatusText>
                        </Styled.ListItemWrapper>
                        <Styled.ListItemWrapper>
                          <Styled.StatusListHeading>플랫폼</Styled.StatusListHeading>
                          <Styled.StatusText>{TEAM__NICK_NAME[team.name]}</Styled.StatusText>
                        </Styled.ListItemWrapper>
                        <Styled.ListItemWrapper>
                          <Styled.StatusListHeading>지원상태</Styled.StatusListHeading>
                          <Styled.StatusText>{STATUS_WORDS[result.status]}</Styled.StatusText>
                        </Styled.ListItemWrapper>
                        <Styled.DetailLinkWrapper>
                          <Styled.ApplicationDetailLink
                            href={`${MY_PAGE_APPLICATION_DETAIL}/${applicationId}`}
                          >
                            지원서 상세보기
                          </Styled.ApplicationDetailLink>
                        </Styled.DetailLinkWrapper>
                      </Styled.StatusListItem>
                    );
                  })}
                </Styled.StatusList>
              )}
            </>
          )}
        </Styled.ListWrapper>
      </Styled.MainWrapper>
    </Styled.StatusListSection>
  );
};

export default StatusList;
