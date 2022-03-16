import { theme } from '@/styles';
import { objectKeys } from '@/utils/object';
import { Component, CSSProperties } from 'react';
import {
  ToastPosition,
  ToastId,
  ToastMessage,
  ToastOptions,
  ToastState,
  ToastContainer,
} from './Toast.component';

type CreateToastOptions = Partial<Pick<ToastOptions, 'duration' | 'position' | 'id' | 'persist'>>;

export interface ToastMethods {
  // eslint-disable-next-line no-unused-vars
  notify: (message: ToastMessage, options: CreateToastOptions) => ToastId;
  // eslint-disable-next-line no-unused-vars
  close: (id: ToastId) => void;
}

interface ToastManagerProps {
  // eslint-disable-next-line no-unused-vars
  notify: (methods: ToastMethods) => void;
}

export class ToastManager extends Component<ToastManagerProps, ToastState> {
  static counter = 0;

  constructor(props: ToastManagerProps) {
    super(props);

    this.state = {
      top: [],
      bottom: [],
    };

    const methods = {
      notify: this.notify,
      close: this.closeToast,
    };

    props.notify(methods);
  }

  static getStyle = (position: ToastPosition): CSSProperties => {
    const isTopOrBottom = position === 'top' || position === 'bottom';
    const margin = isTopOrBottom ? '0 auto' : undefined;

    const top = position.includes('top') ? 'env(safe-area-inset-top, 0px)' : undefined;
    const bottom = position.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : undefined;
    const right = !position.includes('left') ? 'env(safe-area-inset-right, 0px)' : undefined;
    const left = !position.includes('right') ? 'env(safe-area-inset-left, 0px)' : undefined;

    return {
      position: 'fixed',
      zIndex: theme.zIndex.toast,
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'none',
      margin,
      top,
      bottom,
      right,
      left,
    };
  };

  notify = (message: ToastMessage, options: CreateToastOptions) => {
    const toast = this.createToast(message, options);
    const { position, id } = toast;

    this.setState((prevState) => {
      const isTop = position.includes('top');

      const toasts = isTop ? [toast, ...prevState[position]] : [...prevState[position], toast];

      return {
        ...prevState,
        [position]: toasts,
      };
    });

    return id;
  };

  createToast = (message: ToastMessage, options: CreateToastOptions) => {
    ToastManager.counter += 1;
    const id = options.id ?? String(ToastManager.counter);

    const position = options.position ?? 'top';

    return {
      id,
      message,
      position,
      duration: options.duration,
      persist: options.persist,
      onRequestRemove: () => this.removeToast(id, position),
      requestClose: false,
    };
  };

  removeToast = (id: ToastId, position: ToastPosition) => {
    this.setState((prevState) => ({
      ...prevState,
      [position]: prevState[position].filter((toast) => toast.id !== id),
    }));
  };

  closeToast = (id: ToastId) => {
    this.setState((prevState) => {
      const position = Object.values(prevState)
        .flat()
        .find((toast) => toast.id === id)?.position;

      if (!position) return prevState;

      return {
        ...prevState,
        [position]: prevState[position].map((toast) => {
          if (toast.id === id) {
            return {
              ...toast,
              requestClose: true,
            };
          }

          return toast;
        }),
      };
    });
  };

  render() {
    return objectKeys(this.state).map((position) => {
      const { [position]: toasts } = this.state;
      return (
        <ul key={position} id={`toast-manager-${position}`} style={ToastManager.getStyle(position)}>
          {toasts.map((toast) => (
            <ToastContainer key={toast.id} {...toast} />
          ))}
        </ul>
      );
    });
  }
}
