// Dashboard.jsx

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  // Toggle drawer open/close
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex', height: '100%'}}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          padding: '20px',
        }}
      >
        {/* App Bar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              edge="start"
              onClick={toggleDrawer}
              sx={{
                mr: 2,
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* Main Cards Section */}
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Bag Card */}
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Bag
              </Typography>
              <Typography sx={{ mt: 2 }} color="text.secondary">
                Manage your bag items here.
              </Typography>
            </CardContent>
          </Card>

          {/* Collection Card */}
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Collection
              </Typography>
              <Typography sx={{ mt: 2 }} color="text.secondary">
                Manage your collection here.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
