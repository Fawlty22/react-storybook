import React, {useState, useEffect} from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import {Typography} from '@mui/material';
import DiscCategory from './disc-category';
import { fetchDiscs, updateDisc } from '../services/disc.service';


const Bag: React.FC = () => {
  // Filter discs to only show those in the bag

  const [discsState, setDiscsState] = useState<DiscDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
      
      const fetchData = async () => {
        try {
          const discsData = await fetchDiscs();
          setDiscsState(discsData.filter(disc => disc.inBag));
          setLoading(false);
        } catch (error: any) {
          setError(error.message ?? 'something went wrong');
        }
      }
  
      fetchData();
    }, []);

  const toggleInBag = async (id: number, disc: DiscDto) => {
    const updatedDisc: DiscDto = await updateDisc(id, disc);
    
    setDiscsState(prevState => 
      prevState.filter(d => {
        if(d.id === id) {
          return updatedDisc.inBag ? updatedDisc : false
        } else {
          return true
        }
      })
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
      {discsState.length === 0 ? (
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
