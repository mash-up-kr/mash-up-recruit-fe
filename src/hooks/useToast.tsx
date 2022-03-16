import { theme } from '@/styles';
import { ThemeProvider } from '@emotion/react';
import { Toast } from '@/components';
import {
  RenderProps,
  Status,
  ToastId,
  ToastOptions,
  ToastPosition,
} from '@/components/common/Toast/Toast.component';
import { toast } from '@/components/common/Toast/Toaster';

export interface UseToastOptions {
  position?: ToastPosition;
  duration?: ToastOptions['duration'];
  text?: string;
  id?: ToastId;
  status?: Status;
}

const defaults = {
  duration: 1500,
  position: 'top',
} as const;

export const createStandaloneToast = (defaultOptions: UseToastOptions = defaults) => {
  const renderWithProviders = (props: RenderProps, options: UseToastOptions) => (
    <ThemeProvider theme={theme}>
      <Toast {...props} {...options} />
    </ThemeProvider>
  );

  const standaloneToast = (options: UseToastOptions = {}) => {
    const currentOptions = { ...defaultOptions, ...options };
    const message = (props: RenderProps) => renderWithProviders(props, currentOptions);

    return toast.notify(message, currentOptions);
  };

  return standaloneToast;
};

export const useToast = (defaultOptions?: UseToastOptions) => {
  return createStandaloneToast(defaultOptions);
};

export default useToast;
