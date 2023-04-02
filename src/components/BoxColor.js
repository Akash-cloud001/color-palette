import React from 'react'
import '../styles/BoxColor.css';
const BoxColor = ({name,color}) => {
  return (
    <div className='BoxColor' style={{backgroundColor:color}}>
        <div className='copy-content'>{name}</div>
        <button className='copy-button'>Copy</button>
        <button className='see-more'>More</button>
    </div>
  )
}

export default BoxColor