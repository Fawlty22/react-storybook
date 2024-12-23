import React from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import { Typography } from '@mui/material';
import DiscCategory from './disc-category';
import { updateDisc } from '../services/disc.service';

interface CollectionProps {
  discs: DiscDto[];
  bagToggler: (id: number, disc: DiscDto) => Promise<DiscDto>;
}


const Collection: React.FC<CollectionProps> = ({ discs }) => {
  const toggleInBag = async (id: number, disc: DiscDto) => {
    const response = await updateDisc(id, disc)
    console.log(response);
  }

  const categorizedDiscs = discs.reduce<{ [key: string]: DiscDto[] }>((acc, disc) => {
    if (!acc[disc.category]) {
      acc[disc.category] = [];
    }
    acc[disc.category].push(disc);
    return acc;
  }, {});

  return (
    <div className='container'>
      <Typography variant="h4" textAlign={'center'} gutterBottom>Collection</Typography>

      {/* Loop over each category */}
      {Object.keys(categorizedDiscs).map((category) => (
        <DiscCategory category={category} categorizedDiscs={categorizedDiscs} bagToggler={toggleInBag}/>
      ))}
    </div>
  );
};

export default Collection;
