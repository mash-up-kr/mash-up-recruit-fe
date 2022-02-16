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
}

const Modal = ({ children, setIsOpenModal, beforeRef }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const onModalCloseWithMouseHandler: MouseEventHandler<HTMLDivElement> = ({
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

    const onModalCloseWithEscHandler = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    window.addEventListener('keyup', onModalCloseWithEscHandler);

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

    if (mounted) {
      dialogRef.current?.focus();

      window.addEventListener('keydown', handleFocusTrap);
    }

    if (!mounted) setMounted(true);

    const beforRefInEffect = beforeRef;

    return () => {
      $rootNode?.removeAttribute('aria-hidden');
      document.body.style.overflow = 'unset';

      window.removeEventListener('keyup', onModalCloseWithEscHandler);
      window.removeEventListener('keydown', handleFocusTrap);

      beforRefInEffect?.current.focus();
    };
  }, [beforeRef, mounted, setIsOpenModal]);

  return (
    <Portal elementId="modal-root" mounted={mounted}>
      <Styled.Modal ref={dialogRef} tabIndex={-1} onClick={onModalCloseWithMouseHandler}>
        {children}
      </Styled.Modal>
    </Portal>
  );
};

export default Modal;
