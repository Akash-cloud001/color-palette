import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import logo from '../images/logo.png';
import '../styles/NavBar.css';


const NavBar = ({level, changeLevel, changeSelect}) => {
    const [format, setFormat] = useState('hex');
    const handleChangeSelect = (e)=>{
        setFormat(e.target.value);
        changeSelect(e.target.value);
    }
  return (
    <header className='navbar'>
        <div className='logo'>
            <a href='/'><img src={logo} alt='logo'/></a>
        </div>
        <div className='slider'>
            <div>Level: {level} </div>
            <Slider className='slider-component'
            defaultValue={level} 
            min={100} 
            max={900} 
            step={100} 
            onChange={changeLevel}
            />
        </div>
        <div className='select-container'>
            <Select 
            value={format} 
            onChange={handleChangeSelect}
            variant='standard' 
            > 
                <MenuItem value='hex'>HEX-#ffffff</MenuItem>
                <MenuItem value='rgb'>RGB-(255,255,255)</MenuItem>
                <MenuItem value='rgba'>RGBA-(255,255,255,1.0)</MenuItem>
            </Select>
        </div>
    </header>
  )
}

export default NavBar;