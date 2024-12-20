import { useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Bag from './components/bag/bag'
import { createTheme, ThemeProvider, CssBaseline, Switch } from '@mui/material';


function App() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#90caf9' : '#1976d2',  // Different primary color based on the mode
      },
      background: {
        default: isDarkMode ? '#121212' : '#fafafa',  // Set background color for dark/light mode
      },
      text: {
        primary: isDarkMode ? '#e0e0e0' : '#000000',  // Set text color for dark/light mode
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      {/* <Header></Header> */}
      <CssBaseline /> 
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
}

export default App;
