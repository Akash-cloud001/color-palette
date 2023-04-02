import React from 'react'
import '../styles/Palette.css';
import BoxColor from './BoxColor';
const Palette = (props) => {
  return (
    <div className='palette'>
        {props.palette.colors.map(color=>
        <BoxColor color={color.color} name={color.name
        }/>)}
    </div>
  )
}

export default Palette