import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Values from './pages/Values'
import Markets from './pages/Markets'
import Products from './pages/Products'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/AboutUs" exact element={<AboutUs />} />
          <Route path="/Values" exact element={<Values />} />
          <Route path="/Markets" exact element={<Markets />} />
          <Route path="/Products" exact element={<Products />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
