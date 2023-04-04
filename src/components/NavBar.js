import React, { useState } from 'react';
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import logo from '../images/logo.png';
import '../styles/NavBar.css';


const NavBar = ({level, changeLevel, changeSelect}) => {
    const [format, setFormat] = useState('hex');
    const [open, setOpen] = useState(false);
    const handleChangeSelect = (e)=>{
        setFormat(e.target.value);
        changeSelect(e.target.value);
        setOpen(true);
    }
    const closeSnackBar = ()=>{
        setOpen(false);
    }
  return (
    <>
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
                <Select className='select-component'
                value={format} 
                onChange={handleChangeSelect}
                variant='standard' 
                > 
                    <MenuItem className='menu-item' value='hex' sx={{fontSize:'small'}} >HEX-#ffffff</MenuItem>
                    <MenuItem value='rgb' sx={{fontSize:'small'}}>RGB-(255,255,255)</MenuItem>
                    <MenuItem value='rgba' sx={{fontSize:'small'}}>RGBA-(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
        </header>
        <Snackbar 
            anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
            open={open} 
            autoHideDuration={3000} 
            message={<span id ="meassage-id">Format Changed</span>}
            ContentProps={{
                "aria-describedby" : "message-id"
            }}
            onClose={closeSnackBar}
            action={[
                <IconButton 
                onClick={closeSnackBar}
                color='inherit' 
                key='close'
                size='small'
                aria-label='close'
                >
                    <CloseIcon />
                </IconButton>
            ]}
        />
    </>
  )
}

export default NavBar;