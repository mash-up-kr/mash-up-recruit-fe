import { ValueOf } from '@/types';
import { forwardRef, InputHTMLAttributes } from 'react';
import * as Styled from './LabeledInput.styled';

export const InputSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
} as const;

export type InputSizeType = ValueOf<typeof InputSize>;

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  $size: InputSizeType;
  isError?: boolean;
  errorMessage?: string;
  currentLength?: number;
  maxContentLength?: number | null;
  description?: string | null;
}

const LabeledInput = forwardRef<HTMLInputElement, LabeledInputProps>(
  (
    {
      id,
      label,
      $size,
      required,
      isError = false,
      errorMessage = '',
      currentLength = 0,
      maxContentLength = null,
      description,
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        {required && <Styled.RequiredDot />}
        <Styled.Description>{description}</Styled.Description>
        <Styled.Input
          id={id}
          name={id}
          isError={isError}
          ref={ref}
          {...restProps}
          $size={$size}
          autoComplete="off"
        />
        {isError && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
        {maxContentLength ? (
          <Styled.WatchLengthWrapper>
            <Styled.CurrentLength
              state={(() => {
                if (currentLength >= maxContentLength) return 'max';
                if (currentLength === 0) return 'empty';
                return 'writing';
              })()}
            >
              {currentLength}
            </Styled.CurrentLength>
            <Styled.LimitLength>/{maxContentLength}</Styled.LimitLength>
          </Styled.WatchLengthWrapper>
        ) : null}
      </>
    );
  },
);

LabeledInput.displayName = 'LabeledInput';

export default LabeledInput;
