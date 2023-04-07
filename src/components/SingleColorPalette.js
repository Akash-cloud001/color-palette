import React, {useState} from 'react'
import { useParams } from 'react-router';
import colorSeeds from '../colorSeeds';
import { generatePalette } from '../colorHelper';
import BoxColor from './BoxColor';


const SingleColorPalette = () => {
  const {paletteId,colorId} = useParams();
  const findSinglePalette = (paletteId, colorId)=>{
    // TODO need to find the exact color in a palette by using
    // TODO  paletteId, colorId
    return colorSeeds.find((palette)=>{
      return palette.id === paletteId;
    })
  }

  function gatherShades(){
    let allColors = pal.colors;
    let newShades = [];
    for(let key in allColors){
      newShades = newShades.concat(
        allColors[key].filter(color => color.id === colorId)
      );
    }
    return newShades.slice(1);
  }

  const [pal, setPal] = useState(generatePalette(findSinglePalette(paletteId)));
  const shades = gatherShades();

  console.log(pal)
  console.log(paletteId, colorId);
  console.log('shades ',shades );

  return (
    <div className='palette'>
      
      <div className='palette-colors'>
        {shades.map(shade => <BoxColor 
              name={shade.name}
              key ={shade.id}
              color={shade.hex}
              showLink = {false}
          />)}
      </div>
    </div>
  )
}

export default SingleColorPalette;