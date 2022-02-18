import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import SignInModalDialog, { SignInModalDialogProps } from './SignInModalDialog.component';

export default {
  title: 'SignInModalDialog',
  component: SignInModalDialog,
} as ComponentMeta<typeof SignInModalDialog>;

const Template: ComponentStory<typeof SignInModalDialog> = (args: SignInModalDialogProps) => {
  const ref = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  const handleOpenSignINModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenSignInModal(true);
  };
  return (
    <div id="modal-root">
      <button type="button" onClick={handleOpenSignINModal} ref={ref}>
        modal open
      </button>
      {isOpenSignInModal && (
        <SignInModalDialog {...args} setIsOpenModal={setIsOpenSignInModal} beforeRef={ref} />
      )}
    </div>
  );
};

export const SignIn = Template.bind({});
SignIn.args = { device: 'desktop', type: 'login' };

export const Apply = Template.bind({});
Apply.args = { device: 'desktop', type: 'apply' };
