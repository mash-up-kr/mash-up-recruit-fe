import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InputSizeType } from './LabeledInput.component';

interface StyledInputProps {
  $size: InputSizeType;
  isError: boolean;
}

export const Input = styled.input<StyledInputProps>`
  ${({ theme, $size, isError }) => css`
    ${theme.input.size[$size]}
    display: block;
    width: 100%;
    margin-top: 0.6rem;
    color: ${theme.colors.gray80};
    border: 0.1rem solid ${isError ? theme.colors.red50 : theme.colors.gray30};
    border-radius: 1.2rem;

    &::selection {
      background: ${theme.colors.purple40};
    }

    &:hover {
      border: 0.1rem solid ${isError ? theme.colors.red50 : theme.colors.purple40};
    }

    &:focus {
      outline: 0.1rem solid ${isError ? theme.colors.red50 : theme.colors.purple70};
    }

    &:disabled {
      color: ${theme.colors.gray60};
      background: ${theme.colors.gray5};
      border: 0.1rem solid ${theme.colors.gray30};
    }

    &::placeholder {
      color: ${theme.colors.gray50};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
    color: ${theme.colors.gray70};
    vertical-align: middle;
  `}
`;

export const RequiredDot = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0.4rem;
    background: ${theme.colors.red70};
    border-radius: 50%;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular13};
    display: block;
    margin-top: 0.2rem;
    color: ${theme.colors.gray60};
  `}
`;

export const ErrorMessage = styled.em`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15};
    display: inline-block;
    margin-top: 0.6rem;
    color: ${theme.colors.red50};
    font-style: normal;
  `}
`;

export const WatchLengthWrapper = styled.div`
  float: right;
  margin-top: 0.6rem;
`;

interface CurrentLengthProps {
  state: 'empty' | 'writing' | 'max';
}

export const CurrentLength = styled.span<CurrentLengthProps>`
  ${({ theme, state }) => css`
    ${theme.fonts.kr.regular15}
    color: ${(() => {
      if (state === 'max') return theme.colors.purple70;
      if (state === 'writing') return theme.colors.gray70;
      return theme.colors.gray50;
    })()};
  `}
`;

export const LimitLength = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15}
    color: ${theme.colors.gray50};
  `}
`;
