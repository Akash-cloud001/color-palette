import { withStyles } from '@material-ui/styles';
import React from 'react'
import { useNavigate } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  root:{
    border : '1px solid black',
    backgroundColor : 'white',
    borderRadius : '5px',
    padding : '0.5rem',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg':{
      opacity : 1
    }
  },
  colors:{
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
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
  },
  miniColor:{
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin : '0 auto',
    position: 'relative',
    marginBottom: '-5px'
  },
  delete:{

  },
  deleteIcon:{
    boxSizing : 'content-box',
    color : 'white',
    backgroundColor : '#eb3d30',
    width : '20px',
    height : '20px',
    position : 'absolute',
    right : '0',
    top : '0',
    padding : '5px',
    zIndex : '1',
    opacity : 0,
  }

}

const MiniPalette = (props) => {
  const navigate = useNavigate();
  const { classes, paletteName, emoji, id, colors, handleClick } = props;

  const miniColorBoxes = colors.map(color=>(
    <div 
      className={classes.miniColor} 
      style={{backgroundColor: color.color}}
      key={color.name}
    >

    </div>
  ))
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} style={{transition : 'all 0.4s ease-in-out'}}/>
      </div>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);