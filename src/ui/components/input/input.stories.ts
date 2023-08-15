import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<InputComponent> = {
  title: 'Ui/Input',
  component: InputComponent,
  tags: ['autodocs'],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {},
};
