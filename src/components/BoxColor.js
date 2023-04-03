import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/BoxColor.css';

const BoxColor = ({name,color}) => {
  const [copied, setCopied] = useState(false);
  const changeCopy = ()=>{
    setCopied(true);
    setTimeout(()=> setCopied(false),2000);
  }
  
  return (
    <CopyToClipboard text={color} onCopy={changeCopy}>
      <div className='BoxColor' style={{backgroundColor:color}}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{background:color}}/>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>
            copied
          </h1>
          <p>
            {color}
          </p>
        </div>
        <div className='copy-content'>{name}</div>
        <button className='copy-button'>Copy</button>
        <button className='see-more'>More</button>
      </div>
    </CopyToClipboard>
    
  )
}
export default BoxColor;