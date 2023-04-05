import React, { useState } from 'react'
import NavBar from './NavBar';
import colorSeeds from '../colorSeeds';
import { useParams } from 'react-router-dom';
import '../styles/Palette.css';
import BoxColor from './BoxColor';
import { generatePalette } from '../colorHelper';



const Palette = () => {
  const {id} = useParams();

  const findPalette = (id)=>{
    return colorSeeds.find((palette)=>{
      return palette.id === id;
    })
  }  
  const [pal, setPal] = useState(generatePalette(findPalette(id)));


  const {colors,paletteName, emoji} = pal;
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
            <a href='https://github.com/Akash-cloud001'>Made by  Akash</a>
            <div>
              <span>
                {paletteName}
              </span>
              <span className='footer-emoji'>
                {emoji}
              </span>
            </div>
      </footer>
    </div>
  )
}

export default Palette