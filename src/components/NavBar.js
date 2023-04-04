import React from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import logo from '../images/logo.png';
import '../styles/NavBar.css';


const NavBar = ({level, changeLevel}) => {
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
    </header>
  )
}

export default NavBar;