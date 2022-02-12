import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import ConfirmModalDialog, { ConfirmModalDialogProps } from './ConfirmModalDialog.component';

export default {
  title: 'ConfirmModalDialog',
  component: ConfirmModalDialog,
} as ComponentMeta<typeof ConfirmModalDialog>;

const Template: ComponentStory<typeof ConfirmModalDialog> = (args: ConfirmModalDialogProps) => {
  const ref = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const handleOpenConfirmModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenConfirmModal(true);
  };

  const handleCloseConfirmModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenConfirmModal(false);
  };
  return (
    <div id="modal-root">
      <button type="button" onClick={handleOpenConfirmModal} ref={ref}>
        modal open
      </button>
      {isOpenConfirmModal && (
        <ConfirmModalDialog
          {...args}
          setIsOpenModal={setIsOpenConfirmModal}
          handleApprovalButton={handleCloseConfirmModal}
          handleCancelButton={handleCloseConfirmModal}
          beforeRef={ref}
        />
      )}
    </div>
  );
};

export const Exit = Template.bind({});
Exit.args = {
  heading: '지금..나가시게요..?',
  paragraph: '저장안된 내용은..날아갈 수 있다능..',
  approvalButtonMessage: '나가기',
  cancelButtonMessage: '머물기',
};

export const Save = Template.bind({});
Save.args = {
  heading: '임시 저장하시겠어요?',
  paragraph:
    '확인 버튼 누르면 내페이지에 저장됨 \n제한 기간 내에 꼭! 모두 작성하셔서 제출해주세요!',
  approvalButtonMessage: '확인',
  cancelButtonMessage: '취소',
};

export const Submit = Template.bind({});
Submit.args = {
  heading: '지원서를 제출하시겠어요?',
  paragraph:
    '제출하시면 더 이상 지원서를 수정하거나 삭제할 수 없습니다.\n 지원 관련 문의는 recruit.mashup@gmail.com으로 해주시면 됩니다.',
  approvalButtonMessage: '제출하기',
  cancelButtonMessage: '취소',
};
