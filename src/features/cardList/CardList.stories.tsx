import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardList } from './CardList';
import { cardSample } from './cardSample';

export default {
  title: `Features/CardList`,
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardData: cardSample,
};
