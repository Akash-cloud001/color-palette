import React, { useState } from 'react'
import '../styles/Palette.css';
import BoxColor from './BoxColor';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Palette = (props) => {
  const [level,setLevel] = useState(500);
  const changeLevel = (newLevel) =>{
    setLevel(newLevel);
  }
  return (
    <div className='palette'>
      <div className='slider'>
        <Slider 
          defaultValue={level} 
          min={100} 
          max={900} 
          step={100} 
          onChange={changeLevel}
        />

      </div>
      <div className='palette-colors'>
          {props.palette.colors[level].map(color=>
          <BoxColor color={color.hex} name={color.name
          }/>)}
      </div>
    </div>
  )
}

export default Palette