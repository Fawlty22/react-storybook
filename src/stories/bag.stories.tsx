import { Meta, StoryFn } from '@storybook/react';
import Bag from '../components/bag';

export default {
  title: 'Components/Bag',
  component: Bag,
} as Meta;

const Template: StoryFn = (args) => <Bag {...args} />;

export const Default = Template.bind({});
Default.args = {

};