// src/stories/Bag.stories.tsx
import React from 'react';
import Bag from '../components/bag';
import { Disc } from '../interfaces/disc.interface';

export default {
  title: 'Components/Bag',
  component: Bag,
};

const sampleDiscs: Disc[] = [
  {
    id: 1,
    inBag: true,
    name: 'Destroyer',
    brand: 'Innova',
    category: 'Driver',
    speed: 12,
    glide: 5,
    turn: -1,
    fade: 3,
  },
  {
    id: 2,
    inBag: true,
    name: 'Aviar',
    brand: 'Discmania',
    category: 'Putter',
    speed: 3,
    glide: 3,
    turn: 0,
    fade: 1,
  },
  {
    id: 3,
    inBag: false,
    name: 'Buzzz',
    brand: 'Discraft',
    category: 'Midrange',
    speed: 5,
    glide: 4,
    turn: -1,
    fade: 1,
  },
];

const EmptyBag: Disc[] = [];

export const WithDiscs = () => <Bag discs={sampleDiscs} />;
export const Empty = () => <Bag discs={EmptyBag} />;
