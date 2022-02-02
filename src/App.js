import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import TopHalf from "./Components/TopHalf"
import BottomHalf from "./Components/BottomHalf"

const App = (props) => {

  return (
    <div className="App overflow-x-hidden">
        <TopHalf />
        <BottomHalf />
    </div>
  )
}

export default App;
