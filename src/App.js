import './App.css';
import { Routes, Route} from 'react-router-dom';
import colorSeeds from './colorSeeds';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import PaletteList from './components/PaletteList';
import CreateNewPalette from './components/CreateNewPalette';


function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palette = {colorSeeds}/>} />
        <Route path='/palette/new-palette' element={<CreateNewPalette />} />
        <Route path='/palette/:id' element={<Palette />} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette/>} />
      </Routes>
    </div>
  );
}

export default App;
