import React, { useEffect, useState } from "react";
import { DiscDto } from "../interfaces/disc.interface";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { HexColorPicker } from "react-colorful";
import Popover from "@mui/material/Popover";
import { updateDisc } from "../services/disc.service";
import PaletteIcon from "@mui/icons-material/Palette";

interface DiscProps {
  disc: DiscDto;
  bagToggler: (id: number, disc: DiscDto) => Promise<void>;
}

const Disc: React.FC<DiscProps> = ({ disc, bagToggler }) => {
  const [color, setColor] = useState(disc.color);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    updateDisc(disc.id, { ...disc, color: newColor });
  };

  const handleColorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClick = async () => {
    const updatedDisc = { ...disc, inBag: !disc.inBag };
    await bagToggler(disc.id, updatedDisc);
  };

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
          "& .hidden-button": {
            opacity: 1,
          },
        },
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginRight: "6px" }}
            >
              {disc.name}
            </Typography>
            <IconButton
              onClick={handleColorClick}
              sx={{
                backgroundColor: color,
                width: "32px",
                height: "32px",
                "&:hover": {
                  backgroundColor: color,
                  opacity: 0.8,
                },
              }}
            >
              {!color && <PaletteIcon />}
            </IconButton>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{ marginTop: "6px" }}
            >
              <HexColorPicker color={color} onChange={handleColorChange} />
            </Popover>
          </div>
          <Chip
            label={disc.inBag ? "In Bag" : "Not in Bag"}
            color={disc.inBag ? "primary" : "secondary"}
          />
        </div>

        <Typography variant="body2" color="textSecondary">
          {disc.brand}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn} | Fade:{" "}
          {disc.fade}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          size="small"
          variant="contained"
          color={disc.inBag ? "primary" : "secondary"}
          onClick={handleClick}
          className="hidden-button"
        >
          {disc.inBag ? "Remove from Bag" : "Add to Bag"}
        </Button>
        <IconButton
          className="hidden-button"
          aria-label="Add to Cart"
          href={`https://infinitediscs.com/${disc.brand}-${disc.name}`}
          target="_blank"
          sx={{
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Disc;
