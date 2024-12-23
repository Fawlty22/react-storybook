import React from "react";
import { DiscDto } from "../interfaces/disc.interface";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  CardActions,
} from "@mui/material";
import Disc from "./disc";

interface DiscProps {
  categorizedDiscs: { [key: string]: DiscDto[] };
  category: string;
}

const DiscCategory: React.FC<DiscProps> = ({ categorizedDiscs, category }) => {
  return (
    <div key={category} style={{ marginBottom: "2rem" }}>
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>

      {/* Grid container for the cards */}
      <Grid container spacing={2}>
        {categorizedDiscs[category].map((disc) => (
          <Grid item key={disc.id} xs={12} sm={6} md={4} lg={3}>
            <Disc disc={disc} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiscCategory;
