import { ReactNode, useEffect } from 'react';
import Success from '@/assets/svg/success.svg';
import Close from '@/assets/svg/close.svg';
import * as Styled from './Toast.styled';

export type ToastId = string;

export interface RenderProps {
  id: ToastId;
  onClose: () => void;
}

// eslint-disable-next-line no-unused-vars
export type ToastMessage = (props: RenderProps) => ReactNode;

export type ToastPosition = 'top' | 'bottom';

export interface ToastOptions {
  message: ToastMessage;
  id: ToastId;
  duration?: number;
  onRequestRemove: () => void;
  position: ToastPosition;
  requestClose?: boolean;
}

export type ToastState = Record<ToastPosition, ToastOptions[]>;

export interface ToastContainerProps extends ToastOptions {}

export const ToastContainer = ({
  id,
  message,
  onRequestRemove,
  requestClose = false,
  duration,
}: ToastContainerProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onRequestRemove();
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [duration, onRequestRemove]);

  useEffect(() => {
    if (requestClose) {
      onRequestRemove();
    }
  }, [requestClose, onRequestRemove]);

  return <Styled.ToastContainer>{message({ id, onClose: onRequestRemove })}</Styled.ToastContainer>;
};

interface ToastProps extends RenderProps, Partial<Pick<ToastOptions, 'duration' | 'position'>> {
  text?: string;
}

const Toast = ({ text, onClose }: ToastProps) => {
  return (
    <Styled.Toast>
      <Styled.Contents>
        <Styled.Badge>
          <Success />
        </Styled.Badge>
        <Styled.Text>{text}</Styled.Text>
      </Styled.Contents>
      <Styled.CloseButton onClick={onClose}>
        <Close />
      </Styled.CloseButton>
    </Styled.Toast>
  );
};

export default Toast;
