import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CheckIcon from '@/assets/svg/check-icon-8.svg';

export const LabeledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  order: 0;
  width: 1.2rem;
  height: 1.2rem;
`;

export const A11yCheckbox = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  margin: 0;
  transform: translate3d(-50%, -50%, 0);
  cursor: pointer;
  opacity: 0;
`;

interface CustomCheckoutProps {
  isChecked: boolean;
  disabled: boolean;
}

export const CustomCheckbox = styled.label<CustomCheckoutProps>`
  ${({ theme, isChecked, disabled }) => css`
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0;
    background: ${disabled && isChecked
      ? theme.colors.gray30
      : isChecked
      ? theme.colors.purple70
      : theme.colors.white};
    border: ${isChecked ? 0 : '0.1rem'} solid ${theme.colors.gray30};
    border-radius: 0.2rem;
  `}
`;

export const CustomCheckIcon = styled(CheckIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const AgreePersonalInfoLabel = styled.label`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium14};
    order: 1;
    margin-left: 0.8rem;
    color: ${theme.colors.gray70};

    & > a {
      display: inline-block;
      color: ${theme.colors.gray70};
      border-bottom: 0.1rem solid ${theme.colors.gray70};
    }
  `}
`;
