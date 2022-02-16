import Router from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';

const usePreventPageChangeWithConfirmModal = (
  isOpenConfirmModal: boolean,
  setOpenConfirmModal: Dispatch<SetStateAction<boolean>>,
  setAfterBlockingPath: Dispatch<SetStateAction<string>>,
) => {
  useEffect(() => {
    const handleBlockBeforeRouteChange = (toPath: string) => {
      if (Router.asPath !== toPath && !isOpenConfirmModal) {
        setOpenConfirmModal(true);
        setAfterBlockingPath(toPath);
        throw 'Route Change Blocking';
      }
    };

    const beforeunload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '변경사항이 저장되지 않을 수 있습니다.';
      return '변경사항이 저장되지 않을 수 있습니다.';
    };

    window.addEventListener('beforeunload', beforeunload);
    Router.events.on('routeChangeStart', handleBlockBeforeRouteChange);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      Router.events.off('routeChangeStart', handleBlockBeforeRouteChange);
    };
  }, [isOpenConfirmModal, setAfterBlockingPath, setOpenConfirmModal]);
};

export default usePreventPageChangeWithConfirmModal;
