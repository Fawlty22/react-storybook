// src/stories/Collection.stories.tsx
import Collection from '../components/collection';
import { Disc } from '../interfaces/disc.interface';

export default {
  title: 'Components/Collection',
  component: Collection,
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

export const Default = () => <Collection discs={sampleDiscs} />;
