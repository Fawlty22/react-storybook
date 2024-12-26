// src/stories/Bag.stories.tsx


import React from "react";
import { Meta, Story } from "@storybook/react";
import DiscCategory from "../components/disc-category";
import { DiscDto } from "../interfaces/disc.interface";
import { jest } from '@jest/globals';

// Mock data
const mockDiscs: DiscDto[] = [
    {
        "id": 12,
        "userId": 1,
        "inBag": true,
        "name": "Valkyrie",
        "brand": "Innova",
        "category": "Fairway Driver",
        "speed": 9,
        "glide": 4,
        "turn": -2,
        "fade": 1
      },
      {
        "id": 13,
        "userId": 1,
        "inBag": false,
        "name": "Maverick",
        "brand": "Innova",
        "category": "Fairway Driver",
        "speed": 7,
        "glide": 4,
        "turn": -1,
        "fade": 2
      },
];

// Mock bagToggler
const mockBagToggler = jest.fn((id: number, disc: DiscDto) => Promise.resolve());

// Story setup
export default {
  title: "Components/DiscCategory",
  component: DiscCategory,
} as Meta<typeof DiscCategory>;

const Template: Story<typeof DiscCategory> = (args: any) => (
  <DiscCategory {...args} />
);

export const Default = Template.bind({});
Default.args = {
  categorizedDiscs: mockDiscs,
  category: "Driver",
  bagToggler: mockBagToggler,
};
