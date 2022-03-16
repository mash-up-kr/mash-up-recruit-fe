import { detectOS } from './userAgent';

const copyExecCommand = (text: string) => {
  const isIOS = detectOS('iOS');
  const textArea = document.createElement('textarea');

  textArea.style.cssText = 'position: fixed; z-index: -1; opacity: 0';

  textArea.contentEditable = 'true';
  textArea.readOnly = true;

  document.body.appendChild(textArea);
  textArea.textContent = text;

  if (isIOS) {
    const selection = window.getSelection();
    const range = document.createRange();

    selection?.removeAllRanges();
    selection?.addRange(range);

    range.selectNodeContents(textArea);

    textArea.setSelectionRange(0, textArea.value.length);
  } else {
    textArea.select();
  }

  document.execCommand('copy');

  document.body.removeChild(textArea);
};

export const copyToClipboard = async (text: string) => {
  return copyExecCommand(text);
};
