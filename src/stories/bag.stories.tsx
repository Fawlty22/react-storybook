import { Meta, StoryFn } from '@storybook/react';
import Bag from '../pages/bag';

export default {
  title: 'Pages/Bag',
  component: Bag,
} as Meta;

const Template: StoryFn = (args) => <Bag {...args} />;

export const Default = Template.bind({});
Default.args = {

};