import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';

import Blog from './Components/Blog/Blog';
import Article from './Components/Blog/Article';

import Games from "./Components/Games/Games"

import Footer from "./Components/Footer"

const App = () => {

  return (
    <div>
      <div className='min-h-screen bg-gray-800 text-white'>
        <Routes>
            <Route path='/blog' element={<Blog />}  />
            <Route path='/blog/:article' element={<Article />}  />
            <Route path='/games' element={<Games />}  />
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
