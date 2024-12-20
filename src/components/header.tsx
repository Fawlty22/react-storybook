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
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/bag">
          Bag
        </Button>
        <Button color="inherit" component={Link} to="/collection">
          Collection
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
