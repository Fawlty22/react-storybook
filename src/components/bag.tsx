import React, {useState} from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import {Typography} from '@mui/material';
import DiscCategory from './disc-category';
import { updateDisc } from '../services/disc.service';

interface BagProps {
  discs: DiscDto[];
  bagToggler: (id: number, disc: DiscDto) => Promise<void>;
}


const Bag: React.FC<BagProps> = ({ discs }) => {
  // Filter discs to only show those in the bag
  const discsInBag = discs.filter(disc => disc.inBag);
  
  const [discsState, setDiscsState] = useState<DiscDto[]>(discsInBag);
  

  const toggleInBag = async (id: number, disc: DiscDto) => {
    const updatedDisc = await updateDisc(id, disc);
    
    setDiscsState(prevState => 
      prevState.map(d => (d.id === id ? updatedDisc : d))
    );
  }
  // Group discs by category
  const categorizedDiscs = discsState.reduce<{ [key: string]: DiscDto[] }>((acc, disc) => {
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
