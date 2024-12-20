// Dashboard.jsx
import { Box, Drawer, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import Header from '../header/header';

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <List>
          <ListItem button>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List> */}
      </Drawer>
      <Container maxWidth="lg" sx={{ marginLeft: `${drawerWidth}px` }}>
        <Typography variant="h4" gutterBottom>
          Welcome to your Dashboard
        </Typography>
        <Typography variant="body1">
          Here you can see your analytics, settings, and more!
        </Typography>
      </Container>
    </Box>
  );
};

export default Dashboard;
