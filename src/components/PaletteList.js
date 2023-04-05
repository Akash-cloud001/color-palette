import React from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const PaletteList = (props) => {
    const {palette} = props;
    console.log(palette)
    return (
    <div>
        <h2>Color Palette</h2>
        {palette.map((pal)=>(
            // <div>
            //     <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
            // </div>
            // name = {pal.paletteName} id = {pal.id} emoji = {pal.emoji} colors = {pal.colors}
            <MiniPalette {...pal} />
        ))}
    </div>
  )
}

export default PaletteList;