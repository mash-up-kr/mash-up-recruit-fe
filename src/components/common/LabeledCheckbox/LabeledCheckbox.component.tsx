import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import * as Styled from './LabeledCheckbox.styled';

interface LabeledCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  children: ReactNode;
  checked: boolean;
}

const LabeledCheckbox = forwardRef<HTMLInputElement, LabeledCheckboxProps>(
  ({ id, children, checked, disabled = false, ...restProps }, ref) => {
    return (
      <Styled.LabeledCheckboxWrapper>
        <Styled.AgreePersonalInfoLabel htmlFor={id}>{children}</Styled.AgreePersonalInfoLabel>
        <Styled.CheckboxWrapper>
          <Styled.CustomCheckbox isChecked={checked} disabled={disabled} />
          <Styled.CustomCheckIcon />
          <Styled.A11yCheckbox
            type="checkbox"
            id={id}
            name={id}
            ref={ref}
            disabled={disabled}
            {...restProps}
          />
        </Styled.CheckboxWrapper>
      </Styled.LabeledCheckboxWrapper>
    );
  },
);

LabeledCheckbox.displayName = 'LabeledCheckbox';

export default LabeledCheckbox;
