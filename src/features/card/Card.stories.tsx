import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { images } from '@src/assets/images';

export default {
  title: `Features/Card`,
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'card-1',
  header: '시무룩 고양이',
  src: images.simuruk,
  onClick: (id) => console.log('card event from id', id),
};
