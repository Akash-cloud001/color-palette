import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import '../styles/PaletteList.css';


const PaletteList = (props) => {
    const {classes,palette,deletePalette} = props;
    const navigate = useNavigate()
    const goToPalette = (id)=>{
        navigate(`palette/${id}`);
    }

    return (
        <div className='palette-list-root'>
            <div className='palette-list-container'>
                <nav className='palette-list-nav'>
                    <h2>Color Palette</h2>
                    <Link to={'/palette/generate/new-palette'}>Create Palette</Link>
                </nav>
                <div className='palette-list-palettes'  >
                    {palette.map((pal)=>(
                        <MiniPalette {...pal} handleClick = {()=>goToPalette(pal.id)} key={pal.id} deletePalette={deletePalette}/>
                        ))}
                </div>
            </div>
            <footer className='palette-footer'>
                    <a href='https://github.com/Akash-cloud001' target='_blank'><code>Made by  Akash</code></a> 
                    <div>
                        <a href='https://www.linkedin.com/in/akash-parmar-' target='_blank'>
                            <i className="ri-linkedin-fill"></i>  
                        </a>
                        <a href='https://github.com/Akash-cloud001' target='_blank'>
                            <i className="ri-github-fill"></i>  
                        </a>
                    </div>               
            </footer>
        </div>
            
  )
}

export default PaletteList;