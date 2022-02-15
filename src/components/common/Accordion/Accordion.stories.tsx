import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion.component';

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <>
      <Accordion {...args} />
      <Accordion {...args} />
      <Accordion {...args} />
      <Accordion {...args} />
      <Accordion {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: '노드에 대해 얼마나 알아야 지원할 수 있나요?',
  content:
    '면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용면접일정 관련 답변내용',
  headingTagName: 'h3',
};
