import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
    root:{
        height: '25%',
        width : '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor : 'pointer',
        
    }
}

function DragColorBox(props){
    const { classes,color } = props;

    return (
        <div className={classes.root} style={{backgroundColor: color}}> 
            {color}
        </div>
    )
}

export default withStyles(styles)(DragColorBox);