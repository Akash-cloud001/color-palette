import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/BoxColor.css';

const BoxColor = ({name,color}) => {
  return (
    <CopyToClipboard text={color}>
      <div className='BoxColor' style={{backgroundColor:color}}>
        <div className='copy-content'>{name}</div>
        <button className='copy-button'>Copy</button>
        <button className='see-more'>More</button>
      </div>
    </CopyToClipboard>
    
  )
}
export default BoxColor;