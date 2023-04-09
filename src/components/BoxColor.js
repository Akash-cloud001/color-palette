import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {  Snackbar, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/BoxColor.css';
import chroma from 'chroma-js';

const BoxColor = (props) => {
  const navigate = useNavigate();

  const {  name, color, paletteId, colorId, showLink } = props;
  const [copied, setCopied] = useState(false);

  const changeCopy = ()=>{
    setCopied(true);
    setTimeout(()=> setCopied(false),1000);
  }

  const handleSingleColorClick = (e,paletteId, colorId)=>{
      e.stopPropagation();
      navigate(`/palette/${paletteId}/${colorId}`);
  }

  const isDarkColor = chroma(color).luminance() <= 0.4 ;

  return (
    <>
    <CopyToClipboard text={color} onCopy={changeCopy}>
      <div className='BoxColor' style={{backgroundColor:color}}>
        <div className={`copy-content ${isDarkColor?'light-text':'dark-text'}`}>{name}</div>
        <button className={`copy-button ${isDarkColor?'light-text':'dark-text'}`}>Copy</button>

       {showLink &&  
       <Link 
          to={`/palette/${paletteId}/${colorId}`} 
          onClick={(e)=>{handleSingleColorClick(e,paletteId,colorId)}}
        >
          <button className={`see-more ${isDarkColor?'light-text':'dark-text'}`}>More</button>
        </Link>
        }
      </div>
    </CopyToClipboard>
    <Snackbar 
    open={copied} 
    autoHideDuration={3000}
    anchorOrigin={{vertical:"bottom", horizontal:"right"}}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        successfully copied {color}
      </Alert>
    </Snackbar>
    </>
  )
}
export default BoxColor;