import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ButtonContact from './components/ButtonContact';

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Values from './pages/Values'
import Markets from './pages/Markets'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Values" element={<Values />} />
          <Route path="/Markets" element={<Markets />} />
        </Routes>
        <ButtonContact />
        <Footer />

    </>
  )
}

export default App
