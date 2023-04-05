import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useParams} from 'react-router-dom';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';


function App() {
  const colors = colorSeeds[1];
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Main page</div>} />
        <Route path='/palette/:id' element={<Palette />} />
      </Routes>
      {/* <div className='palette-container'>
        <Palette palette = {generatePalette(colors)} setColorId={setColorId}/>
      </div> */}
    </div>
  );
}

export default App;
