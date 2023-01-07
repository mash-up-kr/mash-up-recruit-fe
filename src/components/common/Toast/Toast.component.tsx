/* eslint-disable react/no-unused-prop-types */
import { ReactNode, useEffect } from 'react';
import SuccessBadge from '@/assets/svg/success-badge.svg';
import ErrorBadge from '@/assets/svg/error-badge.svg';
import SuccessClose from '@/assets/svg/success-close.svg';
import ErrorClose from '@/assets/svg/error-close.svg';
import * as Styled from './Toast.styled';

export type ToastId = string;

export interface RenderProps {
  id: ToastId;
  onClose: () => void;
}

// eslint-disable-next-line no-unused-vars
export type ToastMessage = (props: RenderProps) => ReactNode;

export type ToastPosition = 'top' | 'bottom';

export type Status = 'success' | 'error';

export interface ToastOptions {
  message: ToastMessage;
  id: ToastId;
  duration?: number;
  onRequestRemove: () => void;
  position: ToastPosition;
  requestClose?: boolean;
  status: Status;
  persist?: boolean;
}

export type ToastState = Record<ToastPosition, ToastOptions[]>;

export interface ToastContainerProps extends ToastOptions {}

export const ToastContainer = ({
  id,
  message,
  onRequestRemove,
  requestClose = false,
  duration,
  persist,
}: ToastContainerProps) => {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (!persist) {
      timeoutId = setTimeout(() => {
        onRequestRemove();
      }, duration);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [duration, onRequestRemove, persist]);

  useEffect(() => {
    if (requestClose) {
      onRequestRemove();
    }
  }, [requestClose, onRequestRemove]);

  return <Styled.ToastContainer>{message({ id, onClose: onRequestRemove })}</Styled.ToastContainer>;
};

interface ToastProps
  extends RenderProps,
    Partial<Pick<ToastOptions, 'duration' | 'position' | 'status'>> {
  content?: ReactNode;
}

const Toast = ({ content, onClose, status = 'success' }: ToastProps) => {
  return (
    <Styled.Toast status={status}>
      <Styled.Contents>
        <Styled.Badge>{status === 'success' ? <SuccessBadge /> : <ErrorBadge />}</Styled.Badge>
        <Styled.Text>{content}</Styled.Text>
      </Styled.Contents>
      <Styled.CloseButton onClick={onClose}>
        {status === 'success' ? <SuccessClose /> : <ErrorClose />}
      </Styled.CloseButton>
    </Styled.Toast>
  );
};

export default Toast;
