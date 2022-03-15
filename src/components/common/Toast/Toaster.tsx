import { render } from 'react-dom';
import { ToastId, ToastMessage, ToastOptions } from './Toast.component';
import { ToastMethods, ToastManager } from './ToastManager';

const portalId = 'toast-portal';

class Toaster {
  private createToast?: ToastMethods['notify'];

  private closeToast?: ToastMethods['close'];

  constructor() {
    if (typeof window !== 'undefined') {
      let portal: HTMLElement;
      const existingPortal = document.getElementById(portalId);

      if (existingPortal) {
        portal = existingPortal;
      } else {
        portal = document.createElement('div');
        portal.setAttribute('id', portalId);
        document.body.appendChild(portal);
      }

      render(<ToastManager notify={this.bindFunctions} />, portal);
    }
  }

  private bindFunctions = (methods: ToastMethods) => {
    this.createToast = methods.notify;
    this.closeToast = methods.close;
  };

  notify = (message: ToastMessage, options: Partial<ToastOptions> = {}) => {
    this.createToast?.(message, options);
  };

  close = (id: ToastId) => {
    this.closeToast?.(id);
  };
}

export const toast = new Toaster();
