import React from "react";
import { DiscDto } from "../interfaces/disc.interface";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  CardActions,
} from "@mui/material";
interface DiscProps {
    disc: DiscDto;
}

const Disc: React.FC<DiscProps> = ({ disc }) => {

    return (
        <Card
        variant="outlined"
        style={{ height: "100%" }}
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
            border: "1px solid dodgerBlue",
          },
        }}
      >
        <CardContent>
          <div style={{display: 'flex', justifyContent: "space-between"}}>
              <Typography variant="h6" component="div">
            {disc.name}
          </Typography>
          <Chip
            label={disc.inBag ? "In Bag" : "Not in Bag"}
            color={disc.inBag ? "primary" : "secondary"}
          />
          </div>
          
          <Typography variant="body2" color="textSecondary">
            {disc.brand}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn}{" "}
            | Fade: {disc.fade}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            Add
          </Button>
        </CardActions>
      </Card>
    )
}

export default Disc;