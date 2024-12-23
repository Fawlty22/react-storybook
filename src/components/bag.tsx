import React from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import {Typography} from '@mui/material';
import DiscCategory from './disc-category';
import { updateDisc } from '../services/disc.service';

interface BagProps {
  discs: DiscDto[];
  bagToggler: (id: number, disc: DiscDto) => Promise<void>;
}
const toggleInBag = async (id: number, disc: DiscDto) => {
  await updateDisc(id, disc);
}

const Bag: React.FC<BagProps> = ({ discs }) => {
  // Filter discs to only show those in the bag
  const discsInBag = discs.filter(disc => disc.inBag);

  // Group discs by category
  const categorizedDiscs = discsInBag.reduce<{ [key: string]: DiscDto[] }>((acc, disc) => {
    if (!acc[disc.category]) {
      acc[disc.category] = [];
    }
    acc[disc.category].push(disc);
    return acc;
  }, {});

  return (
    <div className='container'>
      <Typography variant="h4" textAlign={'center'} gutterBottom>Bag</Typography>

      {/* If no discs in the bag */}
      {discsInBag.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No discs in your bag.
        </Typography>
      ) : (
        Object.keys(categorizedDiscs).map((category) => (
          <DiscCategory categorizedDiscs={categorizedDiscs} category={category} bagToggler={toggleInBag} />
        ))
      )}
    </div>
  );
};

export default Bag;
