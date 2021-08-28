import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import TopHalf from "./TopHalf"
import BottomHalf from "./BottomHalf"

const App = (props) => {

  return (
    <div className="App" style={{xOverflow: "hidden"}}>
        <TopHalf />
        <BottomHalf />
    </div>
  )
}

export default App;
