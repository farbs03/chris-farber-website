import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Article from './Components/Blog/Article';
import Footer from "./Components/Footer"

const App = () => {

  return (
    <div>
      <Routes>
          <Route path='/blog' element={<Blog />}  />
          <Route path='/blog/:article' element={<Article />}  />
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
