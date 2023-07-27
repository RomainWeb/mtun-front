import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Ui/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      color: 'primary',
      content: 'test button',
      size: 'base',
      type: 'raised',
      isRounded: true,
      ...args,
    },
    template:
      '<mtun-button [color]="color" [size]="size" [type]="type" [isRounded]="isRounded">Button</mtun-button>',
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
