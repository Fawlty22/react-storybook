import { Meta, StoryFn } from '@storybook/react';
import Bag from '../pages/bag';
import { getEmptyDiscs, getAllDiscs } from '../mocks/handlers';
export default {
  title: 'Pages/Bag',
  component: Bag,
} as Meta;

const Template: StoryFn = (args) => <Bag {...args} />;

export const Default = Template.bind({});
Default.args = {

};

// Create different stories for each state
export const Empty = Template.bind({});
Empty.parameters = {
  msw: {
    handlers: [
      getEmptyDiscs
    ],
  },
};


