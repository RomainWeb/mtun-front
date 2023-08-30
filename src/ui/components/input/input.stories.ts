import type { Meta, StoryObj } from '@storybook/angular';
import { InputDirective } from './input.directive';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<InputDirective> = {
  title: 'Ui/Input',
  component: InputDirective,
  tags: ['autodocs'],
  render: (args: InputDirective) => ({
    props: {
      ...args,
    },
    moduleMetadata: {
      declarations: [InputDirective],
    },
    template: `<input UiInput placeholder="text here !" [fieldSize]="fieldSize" />`,
  }),
};

export default meta;
type Story = StoryObj<InputDirective>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {},
};
