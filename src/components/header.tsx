import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>

        {/* Navigation Buttons */}
        {/* <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
