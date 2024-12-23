import React from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import { Typography } from '@mui/material';
import Disc from './disc';
interface CollectionProps {
  discs: DiscDto[];
}

const Collection: React.FC<CollectionProps> = ({ discs }) => {
  // Group discs by category
  const categorizedDiscs = discs.reduce<{ [key: string]: DiscDto[] }>((acc, disc) => {
    if (!acc[disc.category]) {
      acc[disc.category] = [];
    }
    acc[disc.category].push(disc);
    return acc;
  }, {});

  return (
    <div className='container'>
      <Typography variant="h4" gutterBottom>Discs by Category</Typography>

      {/* Loop over each category */}
      {Object.keys(categorizedDiscs).map((category) => (
        <Disc category={category} categorizedDiscs={categorizedDiscs} />
      ))}
    </div>
  );
};

export default Collection;
