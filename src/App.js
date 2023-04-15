import './App.css';
import { Routes, Route} from 'react-router-dom';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import PaletteList from './components/PaletteList';
import CreateNewPalette from './components/CreateNewPalette';
import { useEffect, useState } from 'react';


function App() {  
  const savedPalette = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalette || colorSeeds);

  function savePalette(newPalette){
    setPalettes([...palettes, newPalette]);
  }

  function deletePalette(id){
    setPalettes(palettes.filter(palette => palette.id !== id));
  }

  useEffect(()=>{
    window.localStorage.setItem('palettes',JSON.stringify(palettes));
  }, [palettes])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palette = {palettes} deletePalette = {deletePalette}/>} />
        <Route path='/palette/generate/new-palette' element={<CreateNewPalette savePalette={savePalette} palettes = {palettes}/>} />
        <Route path='/palette/:id' element={<Palette palettes={palettes}/>} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette palettes={palettes}/>} />
      </Routes>
    </div>
  );
}

export default App;
