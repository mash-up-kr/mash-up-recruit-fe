import { IgnorePropsFragment, LoadingModal as LoadingModalComponent } from '@/components';
import { useState } from 'react';

// TODO:(하준) LoadingModal 컴포넌트를 사용한곳 해당 hook을 이용하여 리팩토링
const useLoadingModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const LoadingModal = isLoading ? LoadingModalComponent : IgnorePropsFragment;

  return { LoadingModal, setIsLoading };
};

export default useLoadingModal;
