import React from "react";
import { DiscDto } from '../interfaces/disc.interface';
import { Card, CardContent, Typography, Grid, Chip } from '@mui/material';

interface DiscProps {
    categorizedDiscs: {[key: string]: DiscDto[]};
    category: string;
}

const Disc: React.FC<DiscProps> = ({ categorizedDiscs, category}) => {
  return (
    <div
      key={category}
      style={{ marginBottom: "2rem" }}
    >
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>

      {/* Grid container for the cards */}
      <Grid container spacing={2}>
        {categorizedDiscs[category].map((disc) => (
          <Grid item key={disc.id} xs={12} sm={6} md={4} lg={3}>
            {/* Card for each disc */}
            <Card variant="outlined" style={{ height: "100%" }} sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6, 
                  border: '1px solid dodgerBlue'
                },
            }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {disc.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {disc.brand}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn}{" "}
                  | Fade: {disc.fade}
                </Typography>
                <Chip
                  label={disc.inBag ? "In Bag" : "Not in Bag"}
                  color={disc.inBag ? "primary" : "secondary"}
                  style={{ marginTop: "10px" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Disc;
