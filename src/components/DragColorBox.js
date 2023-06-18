import React from 'react'
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
    root:{
        height: '25%',
        width : '20%',
        margin: '0 auto',
        marginBottom: '-6.5px',
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
        fontWeight:'bold',

    },
   
    '@media (max-width: 991.98px)':{
        root:{
            height: '20%',
            width : '25%',
        }
    },
    '@media (max-width: 769.98px)':{
        root:{
            height: '10%',
            width : '50%',
        }
    },
    '@media (max-width: 575px)':{
        root:{
            height: '10%',
            width : '100%',
        },
        boxContent:{
            display: (props)=> props.isDrawerOpen ? 'none': 'flex',
        }
    },
}

function DragColorBox(props){
    const { classes,color,name,handleDelete,isDrawerOpen } = props;
    console.log(isDrawerOpen);
    return (
        <div className={classes.root} style={{backgroundColor: color}}> 
            <div className={classes.boxContent} style={{display:`{ ${isDrawerOpen ? 'none !important':'flex'}}`}}>
                <span className={classes.boxName}>
                    {name}
                </span>
                <DeleteIcon onClick={handleDelete} style={{transition: 'all 0.3s ease-in-out'}}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(DragColorBox);