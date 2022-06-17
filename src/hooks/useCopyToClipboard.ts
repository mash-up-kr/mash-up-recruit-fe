import { useCallback } from 'react';
import { copyToClipboard } from '@/utils/clipboard';

export interface UseCopyToClipboardOptions {
  onSuccess?: () => void;
  onError?: () => void;
  onComplete?: () => void;
}

const useCopyToClipboard = (text: string, options: UseCopyToClipboardOptions = {}) => {
  const { onSuccess, onError, onComplete } = options;

  const copy = useCallback(() => {
    copyToClipboard(text).then(onSuccess).catch(onError).finally(onComplete);
  }, [text, onSuccess, onError, onComplete]);
  return { copy };
};
export default useCopyToClipboard;
