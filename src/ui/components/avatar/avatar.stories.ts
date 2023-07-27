import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import { faker } from '@faker-js/faker';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<AvatarComponent> = {
  title: 'Ui/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  render: (args: AvatarComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<AvatarComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    img: faker.image.avatar(),
  },
};
