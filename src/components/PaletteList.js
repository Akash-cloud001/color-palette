import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import bg from '../images/doodles1.svg';
const styles = {
    root:{
        minHeight: '100vh',
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundImage:`url(${bg})`,
    },
    container:{
        width : '50%',
        display : 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap:'wrap',
        height : 'max-content',
        gap:'1rem',
        padding: '1rem 0rem'

    },
    nav:{
        display:'flex',
        width : '100%',
        justifyContent: 'space-between',
        color:'white',
        alignItems:'center',
        "& a":{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            fontSize:'medium'
        }
    },
    palettes:{
        boxSizing:'border-box',
        width : '100%',
        display : 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}


const PaletteList = (props) => {
    const {classes,palette} = props;
    const navigate = useNavigate()
    const goToPalette = (id)=>{
        navigate(`palette/${id}`);
    }

    return (
    <div className={classes.root}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h2>Color Palette</h2>
                <Link to={'/palette/new-palette'}>Create Palette</Link>
            </nav>
            <div className={classes.palettes}>
                {palette.map((pal)=>(
                    <MiniPalette {...pal} handleClick = {()=>goToPalette(pal.id)} key={pal.id}/>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList);