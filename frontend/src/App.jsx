import { useState } from 'react'
import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom';

import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
