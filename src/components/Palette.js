import React, { useState } from 'react'
import NavBar from './NavBar';
import '../styles/Palette.css';
import BoxColor from './BoxColor';



const Palette = (props) => {
  const [level,setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const changeLevel = (newLevel) =>{
    setLevel(newLevel);
  }
  const changeSelect = (val)=>{
    setFormat(val); 
  }
  return (
    <div className='palette'>
      <NavBar level={level} changeLevel={changeLevel} changeSelect={changeSelect}/>
      <div className='palette-colors'>
          {props.palette.colors[level]
          .map(color=>
            <BoxColor 
              color={color[format]} 
              name={color.name}
            />
          )}
      </div>
    </div>
  )
}

export default Palette