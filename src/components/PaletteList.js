import React from 'react'
import { Link } from 'react-router-dom';

const PaletteList = (props) => {
    const {palette} = props;
    console.log(palette)
    return (
    <div>
        {palette.map((pal)=>(
            <div>
                <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
            </div>
        ))}
    </div>
  )
}

export default PaletteList;