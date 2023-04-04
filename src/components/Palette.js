import React, { useState } from 'react'
import NavBar from './NavBar';
import '../styles/Palette.css';
import BoxColor from './BoxColor';



const Palette = (props) => {
  const [level,setLevel] = useState(500);
  const changeLevel = (newLevel) =>{
    setLevel(newLevel);
  }
  return (
    <div className='palette'>
      <NavBar level={level} changeLevel={changeLevel} />
      <div className='palette-colors'>
          {props.palette.colors[level].map(color=>
          <BoxColor color={color.hex} name={color.name
          }/>)}
      </div>
    </div>
  )
}

export default Palette