import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes> */}
      <Home />
      <Footer />
    </>
  )
}

export default App
