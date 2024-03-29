import React, { useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';

import Blog from './Components/Blog/Blog';
import Article from './Components/Blog/Article';

import Games from "./Components/Games/Games"

import Footer from "./Components/Footer"

import { applyTheme } from './Utils/applyTheme';
import darkTheme from './Themes/darkTheme';

const App = () => {

  // let theme = JSON.parse(localStorage.getItem('theme'))
  // useEffect(() => {
  //   if(!theme) {
  //     localStorage.setItem('theme', JSON.stringify(darkTheme))
  //     applyTheme(darkTheme)
  //   }
  //   else {
  //     applyTheme(theme)
  //   }
  // }, [])

  return (
    <div>
      <div className='dark min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white print:hidden'>
        <Routes>
            <Route path='/blog' element={<Blog />}  />
            <Route path='/blog/:article' element={<Article />}  />
            <Route path='/games' element={<Games />}  />
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
