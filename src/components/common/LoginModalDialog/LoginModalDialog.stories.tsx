import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import LoginModalDialog, { LoginModalDialogProps } from './LoginModalDialog.component';

export default {
  title: 'LoginModalDialog',
  component: LoginModalDialog,
} as ComponentMeta<typeof LoginModalDialog>;

const Template: ComponentStory<typeof LoginModalDialog> = (args: LoginModalDialogProps) => {
  const ref = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleOpenLoginModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenLoginModal(true);
  };
  return (
    <div id="modal-root">
      <button type="button" onClick={handleOpenLoginModal} ref={ref}>
        modal open
      </button>
      {isOpenLoginModal && (
        <LoginModalDialog {...args} setIsOpenModal={setIsOpenLoginModal} beforeRef={ref} />
      )}
    </div>
  );
};

export const Login = Template.bind({});
Login.args = { device: 'desktop', type: 'login' };

export const Apply = Template.bind({});
Apply.args = { device: 'desktop', type: 'apply' };
