import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import "./assets/styles/index.css";
import Menu from './pages/Menu';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App