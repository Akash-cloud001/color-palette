import React from 'react'
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import DeleteIcon from '@mui/icons-material/Delete';
function checkLumicity({color}){
    console.log('in')
     return chroma(color).luminance() <= 0.4 ? 'white':'black';
}

const styles = {
    root:{
        height: '25%',
        width : '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor : 'pointer',
        "&:hover svg":{
            color:'white',
            scale: '1.3'
        }
    },
    boxContent:{
        color: 'rgba(0,0,0,0.5)',
        position:'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '6px 10px',
        letterSpacing: '1px',
        textTransform:'uppercase',
        fontSize: '12px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boxName:{
        fontWeight:'bold'
    }
}

function DragColorBox(props){
    const { classes,color,name } = props;

    return (
        <div className={classes.root} style={{backgroundColor: color}}> 
            <div className={classes.boxContent}>
                <span className={classes.boxName}>
                    {name}
                </span>
                <DeleteIcon style={{transition: 'all 0.3s ease-in-out'}}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(DragColorBox);