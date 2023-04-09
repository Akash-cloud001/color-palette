import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router';
import colorSeeds from '../colorSeeds';
import { generatePalette } from '../colorHelper';
import BoxColor from './BoxColor';
import NavBar from './NavBar';
import { withStyles } from '@material-ui/styles';


const styles = {
  btn:{
    height: '100%',
    width : '100%',
    backgroundColor : '#212121',
    color: 'white',
    fontSize: '1.2rem',
    overflow: 'hidden',
    transition: 'all 250ms ease-in-out',
    "&:hover":{
      fontSize:'1.3rem'
    }
  }
}


const SingleColorPalette = (props) => {
  const { classes } = props;
  const navigate = useNavigate();
  const {paletteId,colorId} = useParams();

  const [format, setFormat] = useState('hex');
  const changeSelect = (val)=>{
    setFormat(val); 
  };
  
  const findSinglePalette = (paletteId, colorId)=>{
    return colorSeeds.find((palette)=>{
      return palette.id === paletteId;
    })
  }
  const [pal, setPal] = useState(generatePalette(findSinglePalette(paletteId)));
  const {paletteName, emoji} = pal;

  function gatherShades(){
    let allColors = pal.colors;
    let newShades = [];
    for(let key in allColors){
      newShades = newShades.concat(
        allColors[key].filter(color => color.id === colorId)
      );
    }
    return newShades.slice(1);
  }
  const shades = gatherShades();
  
  const colorBoxes = shades.map(shade => <BoxColor 
    name={shade.name}
    key ={shade.name}
    color={shade[format]}
    showLink = {false}
  />)

  // ? I don't know but here i have to go -2 index to go to parent 
  const handleHeadBackButton = ()=>{navigate(-2)}


  return (
    <div className='SingleColorPalette palette'>
      {/* NAVBAR */}
      <NavBar changeSelect={changeSelect}/>
      <div className='palette-colors'>
        {colorBoxes}
        <button className={classes.btn} onClick={handleHeadBackButton}>
          Go Back
        </button>
      </div>
      {/* FOOTER */}
      <footer className='palette-footer'>
            <a href='https://github.com/Akash-cloud001'><code>Made by  Akash</code></a>
            <div>
              <span>
                {paletteName}
              </span>
              <span className='footer-emoji'>
                {emoji}
              </span>
            </div>
      </footer>
    </div>
  )
}

export default withStyles(styles)(SingleColorPalette);