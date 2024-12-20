import { useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Bag from './components/bag/bag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard></Dashboard> 
    </>
  )
}

export default App
