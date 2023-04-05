import { withStyles } from '@material-ui/styles';
import React from 'react'

const styles = {
  root:{
    border : '1px solid black',
    backgroundColor : 'white',
    borderRadius : '5px',
    padding : '0.5rem',
    position: 'relative',
    overflow : 'hidden',
    '&:hover':{
      cursor: 'pointer'
    }
  },
  colors:{
    backgroundColor : 'grey',
  },
  title:{
    display : 'flex',
    justifyContent: 'space-between',
    alignItems : 'center',
    margin : '0',
    color: 'black',
    paddingTop : '0.5rem',
    fontSize : '1rem',
    position: 'relative'
  },
  emoji:{
    marginLeft : '0.5rem',
    fontSize : '1.3rem'
  }
}

const MiniPalette = (props) => {
  
  const { classes, paletteName, emoji, id } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}>

      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);