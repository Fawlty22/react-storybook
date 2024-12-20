import React from 'react';
import { Disc } from '../interfaces/disc.interface';
import { Card, CardContent, Typography, Chip, Box, Divider } from '@mui/material';

interface BagProps {
  discs: Disc[];
}

const Bag: React.FC<BagProps> = ({ discs }) => {
  // Filter discs to only show those in the bag
  const discsInBag = discs.filter(disc => disc.inBag);

  // Group discs by category
  const categorizedDiscs = discsInBag.reduce<{ [key: string]: Disc[] }>((acc, disc) => {
    if (!acc[disc.category]) {
      acc[disc.category] = [];
    }
    acc[disc.category].push(disc);
    return acc;
  }, {});

  return (
    <div>
      <Typography variant="h4" gutterBottom>Discs in Bag</Typography>

      {/* If no discs in the bag */}
      {discsInBag.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No discs in your bag.
        </Typography>
      ) : (
        Object.keys(categorizedDiscs).map((category) => (
          <Box key={category} mb={3}>
            {/* Category Header */}
            <Typography variant="h5" component="h2" gutterBottom>
              {category}
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Grid of cards for each category */}
            <Box display="flex" flexWrap="wrap" gap={2}>
              {categorizedDiscs[category].map((disc) => (
                <Box key={disc.id} flexBasis="calc(33.33% - 16px)" mb={2}>
                  {/* Card for each disc */}
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {disc.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {disc.brand}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                        Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn} | Fade: {disc.fade}
                      </Typography>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Chip label="In Bag" color="primary" size="small" />
                        <Typography variant="body2" color="textSecondary">
                          Category: {disc.category}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        ))
      )}
    </div>
  );
};

export default Bag;
