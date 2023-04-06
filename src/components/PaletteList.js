import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
    root:{
        backgroundColor : 'blue',
        minHeight: '100vh',
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
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
        color:'white'
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