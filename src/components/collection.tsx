import React from 'react';
import { Disc } from '../interfaces/disc.interface';
import { Card, CardContent, Typography, Grid, Chip } from '@mui/material';

interface CollectionProps {
  discs: Disc[];
}

const Collection: React.FC<CollectionProps> = ({ discs }) => {
  // Group discs by category
  const categorizedDiscs = discs.reduce<{ [key: string]: Disc[] }>((acc, disc) => {
    if (!acc[disc.category]) {
      acc[disc.category] = [];
    }
    acc[disc.category].push(disc);
    return acc;
  }, {});

  return (
    <div>
      <Typography variant="h4" gutterBottom>Discs by Category</Typography>

      {/* Loop over each category */}
      {Object.keys(categorizedDiscs).map((category) => (
        <div key={category} className="category-section" style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>{category}</Typography>
          
          {/* Grid container for the cards */}
          <Grid container spacing={2}>
            {categorizedDiscs[category].map((disc) => (
              <Grid item key={disc.id} xs={12} sm={6} md={4}>
                {/* Card for each disc */}
                <Card variant="outlined" style={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {disc.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {disc.brand}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn} | Fade: {disc.fade}
                    </Typography>
                    <Chip
                      label={disc.inBag ? 'In Bag' : 'Not in Bag'}
                      color={disc.inBag ? 'primary' : 'secondary'}
                      style={{ marginTop: '10px' }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Collection;
