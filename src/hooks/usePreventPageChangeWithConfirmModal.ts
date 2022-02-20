import Router from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const usePreventPageChangeWithConfirmModal = (
  setOpenConfirmModal: Dispatch<SetStateAction<boolean>>,
  ignoreCases: boolean[],
) => {
  const [afterBlockingPath, setAfterBlockingPath] = useState('/');

  const handleMoveAfterBlocking = () => {
    Router.push(afterBlockingPath);
  };

  useEffect(() => {
    const handleBlockBeforeRouteChange = (toPath: string) => {
      const blocking = ignoreCases.every((ignoreCase) => !ignoreCase);
      if (Router.asPath !== toPath && blocking) {
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
  }, [ignoreCases, setOpenConfirmModal]);

  return { handleMoveAfterBlocking };
};

export default usePreventPageChangeWithConfirmModal;
