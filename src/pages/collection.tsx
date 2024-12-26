import React, {useState,useEffect} from 'react';
import { DiscDto } from '../interfaces/disc.interface';
import { Typography } from '@mui/material';
import DiscCategory from '../components/disc-category';
import { fetchDiscs, updateDisc } from '../services/disc.service';

const Collection: React.FC = () => {
  const [discsState, setDiscsState] = useState<DiscDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const discsData = await fetchDiscs();
        setDiscsState(discsData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message ?? 'something went wrong');
      }

      
    }

    fetchData();
  }, []);

  const toggleInBag = async (id: number, disc: DiscDto) => {
      const updatedDisc = await updateDisc(id, disc);

      setDiscsState(prevState => 
        prevState.map(d => (d.id === id ? updatedDisc : d))
      );
  };

  const categorizedDiscs = discsState.reduce<{ [key: string]: DiscDto[] }>((acc, disc) => {
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
        <DiscCategory key={'cat' + category} category={category} categorizedDiscs={categorizedDiscs[category]} bagToggler={toggleInBag}/>
      ))}
    </div>
  );
};

export default Collection;
