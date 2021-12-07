import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonColors } from './types';

export default {
  title: `Components/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'PINK',
  onClick: () => console.log('button onclick'),
  label: 'storybook button',
};
