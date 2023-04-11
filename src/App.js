import './App.css';
import { Routes, Route} from 'react-router-dom';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import PaletteList from './components/PaletteList';
import CreateNewPalette from './components/CreateNewPalette';
import { useState } from 'react';


function App() {  
  const [palettes, setPalettes] = useState(colorSeeds);
  function savePalette(newPalette){
    setPalettes([...palettes, newPalette]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palette = {palettes}/>} />
        <Route path='/palette/new-palette' element={<CreateNewPalette savePalette={savePalette}/>} />
        <Route path='/palette/:id' element={<Palette palettes={palettes}/>} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette palettes={palettes}/>} />
      </Routes>
    </div>
  );
}

export default App;
