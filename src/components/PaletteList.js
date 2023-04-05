import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
    root:{
        backgroundColor : 'blue',
        height: '100%',
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container:{
        width : '50%',
        display : 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap:'wrap',
        border:'1px solid black'
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
    console.log(palette)
    return (
    <div className={classes.root}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h2>Color Palette</h2>
            </nav>
            <div className={classes.palettes}>
                {palette.map((pal)=>(
                    <MiniPalette {...pal} />
                    ))}
            </div>
        </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList);