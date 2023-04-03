import React from 'react';
import './App.css';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';


function App() {
  const colors = colorSeeds[4];
  console.log(generatePalette(colors));
  return (
    <div className="App">
      {/* NavBar */}
      <div className='palette-container'>
        <Palette palette = {{...colors}} />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
