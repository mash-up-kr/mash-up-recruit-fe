import { useCallback } from 'react';
import { copyToClipboard } from '@/utils/clipboard';

export interface UseCopyToClipboardOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

const useCopyToClipboard = (text: string, options: UseCopyToClipboardOptions = {}) => {
  const { onSuccess, onError } = options;

  const copy = useCallback(() => {
    copyToClipboard(text).then(onSuccess).catch(onError);
  }, [text, onSuccess, onError]);
  return { copy };
};
export default useCopyToClipboard;
