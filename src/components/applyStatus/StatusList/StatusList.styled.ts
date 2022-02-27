import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { ApplicationAuditStatus } from '@/types/dto';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StatusListSection = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 120rem;
    margin: 16rem auto;
    padding: 5rem 5rem 3rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray20};
    border-radius: 3rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      margin-top: 5.5rem;
      padding: 3.6rem 3.6rem 0;
    }
  `}
`;

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      flex-flow: column nowrap;
      align-items: flex-start;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold30};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold24};
    }
  `}
`;

export const SubmissionNotice = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular14}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    padding: 1.2rem 1.6rem 1.1rem;
    color: ${theme.colors.white};
    word-break: keep-all;
    background: ${theme.colors.purple60};
    border-radius: 1.6rem;

    & > svg {
      margin-right: 1rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.regular14}
      order: -1;
      width: 100%;
      margin-bottom: 3.6rem;
      margin-left: 0;
      padding: 1.4rem 1.6rem 1.4rem;

      & > svg {
        margin-right: 1.6rem;
      }
    }
  `}
`;

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      margin-top: 0;
    }
  `}
`;

export const ListWrapper = styled.div``;

export const StatusListHeader = styled.div`
  ${({ theme }) =>
    css`
      padding: 2rem 0;
      border-bottom: 0.2rem solid ${theme.colors.gray20};

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        display: flex;
        flex-flow: column nowrap;
        width: 30%;
        border-bottom: 0;
      }
    `}
`;

export const StatusListHeading = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-block;
    width: 20%;
    color: ${theme.colors.gray50};
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
      width: 37%;
      text-align: left;
    }
  `}
`;

export const StatusList = styled.ul`
  ${({ theme }) => css`
    padding: 2rem 0 0;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 2.7rem 0 3.6rem;
    }
  `}
`;

export const StatusListItem = styled.li`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 3.6rem 0;
      border-bottom: 0.2rem solid ${theme.colors.gray10};

      &:first-of-type {
        padding-top: 0;
      }

      &:last-of-type {
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
  `}
`;

export const ListItemWrapper = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      margin: 2.3rem 0;

      &:first-of-type {
        margin-top: 0;
      }
    }
  `}
`;

export const StatusText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 9.9rem;
    text-align: center;
    vertical-align: middle;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
      display: inline-block;
      width: 63%;
      height: 0;
      padding: 0;
      text-align: left;
      vertical-align: baseline;
    }
  `}
`;

interface ApplicationStatusProps {
  status: ApplicationAuditStatus;
}

export const ApplicationStatus = styled.span<ApplicationStatusProps>`
  ${({ theme, status }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 9.9rem;
    color: ${status === 'INTERVIEW_PASSED' || status === 'SCREENING_PASSED'
      ? theme.colors.purple70
      : theme.colors.gray80};
    text-align: center;
    vertical-align: middle;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
      display: inline-block;
      width: 63%;
      height: 0;
      padding: 0;
      text-align: left;
      vertical-align: baseline;
    }
  `}
`;

export const DetailLinkWrapper = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 20%;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 100%;
      margin-top: 1rem;
      padding: 0;
    }
  `}
`;

export const ApplicationDetailLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-block;
    padding: 1.45rem 2rem;
    color: ${theme.colors.gray80};
    text-align: center;
    background: ${theme.colors.gray20};
    border-radius: 1.6rem;

    &:hover {
      background: ${theme.colors.gray40};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      width: 100%;
      padding: 1.6rem;
    }
  `}
`;

export const NoSubmittedApplication = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: block;
    margin: 3.7rem 0 5.7rem;
    color: ${theme.colors.gray50};
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      margin: 9.3rem 0 10.2rem;
    }
  `}
`;
