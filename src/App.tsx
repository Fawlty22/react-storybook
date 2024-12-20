import { useState, useEffect} from 'react'
import './App.css'
import Dashboard from './components/dashboard'
import Header from './components/header'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bag from './components/bag';
import Collection from './components/collection';
import { Disc } from './interfaces/disc.interface';

function App() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  const [userDiscCollection, setUserDiscCollection] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Replace with your actual API endpoint or JSON server
    fetch('http://localhost:3000/discs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setUserDiscCollection(data);  // Set the fetched data to the state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err.message); // Handle error if fetch fails
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

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
          <Route path="/bag" element={<Bag/>}></Route>
          <Route path="/collection" element={<Collection discs={userDiscCollection}/>}></Route>
          <Route path="/*" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
      <CssBaseline /> 
    </ThemeProvider>
  );
}

export default App;


