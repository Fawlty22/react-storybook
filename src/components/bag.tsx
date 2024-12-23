import React from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import { Card, CardContent, Typography, Chip, Box, Divider } from '@mui/material';
import Disc from './disc';
interface BagProps {
  discs: DiscDto[];
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
      <Typography variant="h4" gutterBottom>Discs in Bag</Typography>

      {/* If no discs in the bag */}
      {discsInBag.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No discs in your bag.
        </Typography>
      ) : (
        Object.keys(categorizedDiscs).map((category) => (
          <Disc categorizedDiscs={categorizedDiscs} category={category} />
        ))
      )}
    </div>
  );
};

export default Bag;
