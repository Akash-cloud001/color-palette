import React from 'react'
import { useParams } from 'react-router';

const SingleColorPalette = () => {
  const {paletteId,colorId} = useParams();

  const findSinglePalette = (paletteId, colorId)=>{
    // TODO need to find the exact color in a palette by using
    // TODO  paletteId, colorId
  }

  return (
    <div>
      SingleColorPalette
      <br />
      {paletteId}....{colorId}
    </div>
  )
}

export default SingleColorPalette;