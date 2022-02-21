import {
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Portal } from '@/components';
import * as Styled from './Modal.styled';

interface ModalProps {
  children: ReactNode;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef?: MutableRefObject<HTMLButtonElement>;
  deemClose?: boolean;
  escClose?: boolean;
}

const Modal = ({
  children,
  setIsOpenModal,
  beforeRef,
  deemClose = true,
  escClose = true,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleCloseModalWithMouseHandler: MouseEventHandler<HTMLDivElement> = ({
    target,
    currentTarget,
  }) => {
    if (target === currentTarget) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    const $rootNode = document.getElementById('__next');
    $rootNode?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'hidden';

    const handleCloseModalWithEscHandler = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    const handleFocusTrap = (e: KeyboardEvent) => {
      const focusableNodeList = dialogRef.current?.querySelectorAll<HTMLElement>(
        'input, button, textarea, select, [href] [tabindex]',
      );

      if (focusableNodeList) {
        const firstFocusableNode = focusableNodeList[0];
        const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

        if (e.target === firstFocusableNode && e.shiftKey && e.key === 'Tab') {
          e.preventDefault();
          lastFocusableNode.focus();
        }
        if (e.target === lastFocusableNode && !e.shiftKey && e.key === 'Tab') {
          e.preventDefault();
          firstFocusableNode.focus();
        }
      }
    };

    if (escClose) window.addEventListener('keyup', handleCloseModalWithEscHandler);

    if (mounted) {
      dialogRef.current?.focus();

      window.addEventListener('keydown', handleFocusTrap);
    }

    if (!mounted) setMounted(true);

    const beforeRefSnapshot = beforeRef;

    return () => {
      $rootNode?.removeAttribute('aria-hidden');
      document.body.style.overflow = 'unset';

      if (escClose) window.removeEventListener('keyup', handleCloseModalWithEscHandler);
      window.removeEventListener('keydown', handleFocusTrap);

      beforeRefSnapshot?.current?.focus();
    };
  }, [beforeRef, escClose, mounted, setIsOpenModal]);

  return (
    <Portal elementId="modal-root" mounted={mounted}>
      <Styled.Modal
        ref={dialogRef}
        tabIndex={-1}
        onClick={deemClose ? handleCloseModalWithMouseHandler : undefined}
      >
        {children}
      </Styled.Modal>
    </Portal>
  );
};

export default Modal;
