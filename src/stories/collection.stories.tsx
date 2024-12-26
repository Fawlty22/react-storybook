// src/stories/Collection.stories.tsx
import Collection from '../pages/collection';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Pages/Collection',
  component: Collection,
} as Meta;

const Template: StoryFn = (args) => <Collection {...args} />;

export const Default = Template.bind({});
Default.args = {

};