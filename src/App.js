import React from 'react';
import './App.css';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';



function App() {
  const colors = colorSeeds[4];
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
