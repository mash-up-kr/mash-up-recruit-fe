import { forwardRef, TextareaHTMLAttributes } from 'react';
import * as Styled from './LabeledTextArea.styled';

interface LabeledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  currentLength?: number;
  maxContentSize?: number | null;
}

const LabeledTextArea = forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>(
  (
    {
      id,
      label,
      required,
      isError = false,
      errorMessage,
      currentLength,
      maxContentSize,
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        {required && <Styled.RequiredDot />}
        <Styled.TextArea id={id} name={id} isError={isError} {...restProps} ref={ref} />
        {isError && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
        {maxContentSize && (
          <Styled.WatchLengthWrapper>
            <Styled.CurrentLength
              state={(() => {
                if (currentLength === maxContentSize) return 'max';
                if (currentLength === 0) return 'empty';
                return 'writing';
              })()}
            >
              {currentLength}
            </Styled.CurrentLength>
            <Styled.LimitLength>/{maxContentSize}</Styled.LimitLength>
          </Styled.WatchLengthWrapper>
        )}
      </>
    );
  },
);

LabeledTextArea.defaultProps = {
  isError: false,
  errorMessage: '',
  currentLength: 0,
  maxContentSize: null,
};

LabeledTextArea.displayName = 'LabeledTextArea';

export default LabeledTextArea;
