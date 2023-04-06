import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {  Snackbar, IconButton, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/BoxColor.css';

const BoxColor = ({name,color}) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const changeCopy = ()=>{
    setCopied(true);
    setTimeout(()=> setCopied(false),1000);
  }
  const closeSnackBar = ()=>{
    setOpen(false);
}
  return (
    <>
    <CopyToClipboard text={color} onCopy={changeCopy}>
      <div className='BoxColor' style={{backgroundColor:color}}>
        {/* <div className={`copy-overlay ${copied && 'show'}`} style={{background:color}}/>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>
            copied
          </h1>
          <p>
            {color}
          </p>
        </div> */}
        <div className='copy-content'>{name}</div>
        <button className='copy-button'>Copy</button>
        <Link to='/' onClick={e=>e.stopPropagation()}>
          <button className='see-more'>More</button>
        </Link>
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