import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {  Snackbar, IconButton, Alert } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/BoxColor.css';

const BoxColor = (props) => {
  const navigate = useNavigate();

  const {name,color,paletteId,colorId, showLink} = props;
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const changeCopy = ()=>{
    setCopied(true);
    setTimeout(()=> setCopied(false),1000);
  }
  const closeSnackBar = ()=>{
    setOpen(false);
  }

  const handleSingleColorClick = (e,paletteId, colorId)=>{
      e.stopPropagation();
      navigate(`/palette/${paletteId}/${colorId}`);
  }
  return (
    <>
    <CopyToClipboard text={color} onCopy={changeCopy}>
      <div className='BoxColor' style={{backgroundColor:color}}>
        <div className='copy-content'>{name}</div>
        <button className='copy-button'>Copy</button>

       {showLink &&  
       <Link 
          to={`/palette/${paletteId}/${colorId}`} 
          onClick={(e)=>{handleSingleColorClick(e,paletteId,colorId)}}
        >
          <button className='see-more'>More</button>
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