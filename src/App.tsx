import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard'
import Header from './components/header'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bag from './pages/bag';
import Collection from './pages/collection';
 
function App() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  const [userDiscCollection, setUserDiscCollection] = useState([]);
  


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
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/bag" element={<Bag />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route path="/*" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
      <CssBaseline /> 
    </ThemeProvider>
  );
}

export default App;


