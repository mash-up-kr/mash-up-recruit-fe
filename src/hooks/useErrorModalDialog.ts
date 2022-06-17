import { IgnorePropsFragment, ErrorAlertModalDialog } from '@/components';
import { useState } from 'react';

const useErrorModalDialog = () => {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const ErrorModalDialog = isOpenErrorModal ? ErrorAlertModalDialog : IgnorePropsFragment;

  return { ErrorModalDialog, setIsOpenErrorModal };
};

export default useErrorModalDialog;
