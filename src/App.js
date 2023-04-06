import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useParams} from 'react-router-dom';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';
import PaletteList from './components/PaletteList';


function App() {
  const colors = colorSeeds[1];
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palette = {colorSeeds}/>} />
        <Route path='/palette/:id' element={<Palette />} />
        <Route path='/palette/:paletteId/:colorId' element={<div>Single Color page</div>} />
      </Routes>
      {/* <div className='palette-container'>
        <Palette palette = {generatePalette(colors)} setColorId={setColorId}/>
      </div> */}
    </div>
  );
}

export default App;
