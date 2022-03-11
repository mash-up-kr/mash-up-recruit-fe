import { forwardRef, TextareaHTMLAttributes } from 'react';
import * as Styled from './LabeledTextArea.styled';

interface LabeledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  currentLength?: number;
  maxContentLength?: number | null;
  description: string | null;
}

const LabeledTextArea = forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>(
  (
    {
      id,
      label,
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
        <Styled.TextArea id={id} name={id} isError={isError} {...restProps} ref={ref} />
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

LabeledTextArea.displayName = 'LabeledTextArea';

export default LabeledTextArea;
