import React, { useState } from 'react'
import NavBar from './NavBar';
import '../styles/Palette.css';
import BoxColor from './BoxColor';



const Palette = (props) => {
  const {colors,paletteName, emoji} = props.palette;
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
          {colors[level]
          .map(color=>
            <BoxColor 
              color={color[format]} 
              name={color.name}
              key={color.id}
            />
          )}
      </div>
      <footer className='palette-footer'>
            <span>
              {paletteName}
            </span>
            <span className='footer-emoji'>
              {emoji}
            </span>
      </footer>
    </div>
  )
}

export default Palette