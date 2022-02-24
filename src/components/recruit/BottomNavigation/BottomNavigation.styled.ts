import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    max-width: 78.4rem;
    margin: 0 auto;
    color: ${theme.colors.gray70};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: none;
      padding: 0 2rem;
    }
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    max-width: 78.4rem;
    height: 8.6rem;
    color: ${theme.colors.gray70};
    border-radius: 1.6rem;

    &:hover {
      background: ${theme.colors.gray10};
    }

    & > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 2.7rem 2.5rem 2.3rem 2.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: none;

      & > a {
        padding: 0;
      }

      & > a:hover {
        background: ${theme.colors.white};
      }
    }
  `}
`;

export const PlatformContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 45.4rem;
    color: ${theme.colors.gray70};

    span:first-of-type {
      ${theme.fonts.en.extrabold26};
      width: 25.6rem;
    }

    span:last-of-type {
      ${theme.fonts.en.light15};
      width: 13.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      flex-direction: column;
      max-width: none;

      span:first-of-type {
        ${theme.fonts.en.extrabold18};
        width: 100%;
      }

      span:last-of-type {
        ${theme.fonts.en.light15};
        width: 100%;
      }
    }
  `}
`;

export const RecruitDateContainer = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.light15};
    color: ${theme.colors.purple60};
  `}
`;
