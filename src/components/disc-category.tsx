import React from "react";
import { DiscDto } from "../interfaces/disc.interface";
import {
  Typography,
  Grid,
} from "@mui/material";
import Disc from "./disc";

interface DiscProps {
  category: string;
  bagToggler: (id: number, disc: DiscDto) => Promise<void>
  categorizedDiscs: DiscDto[]
}

const DiscCategory: React.FC<DiscProps> = ({ categorizedDiscs, category, bagToggler}) => {
  return (
    <div key={category} style={{ marginBottom: "2rem" }}>
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>

      {/* Grid container for the cards */}
      <Grid container spacing={2}>
        {categorizedDiscs.map((disc: DiscDto) => (
          <Grid item key={disc.id} xs={12} sm={6} md={4} lg={3}>
            <Disc key={'disc'+ disc.id} disc={disc} bagToggler={bagToggler}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiscCategory;
