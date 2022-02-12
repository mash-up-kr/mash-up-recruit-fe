import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import AlertModalDialog, { AlertModalDialogProps } from './AlertModalDialog.component';

export default {
  title: 'AlertModalDialog',
  component: AlertModalDialog,
} as ComponentMeta<typeof AlertModalDialog>;

const Template: ComponentStory<typeof AlertModalDialog> = (args: AlertModalDialogProps) => {
  const ref = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

  const handleOpenAlertModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenAlertModal(true);
  };

  const handleCloseAlertModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenAlertModal(false);
  };
  return (
    <div id="modal-root">
      <button type="button" onClick={handleOpenAlertModal} ref={ref}>
        modal open
      </button>
      {isOpenAlertModal && (
        <AlertModalDialog
          {...args}
          setIsOpenModal={setIsOpenAlertModal}
          handleApprovalButton={handleCloseAlertModal}
          beforeRef={ref}
        />
      )}
    </div>
  );
};

export const Validation = Template.bind({});
Validation.args = {
  heading: '지금..나가시게요..?',
  paragraph: '저장안된 내용은..날아갈 수 있다능..',
};
