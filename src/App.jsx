import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import "./assets/styles/index.css";
import Menu from './pages/Menu';
import Login from './components/Layouts/Login/Login';
import Register from './components/Layouts/Register/Register';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App