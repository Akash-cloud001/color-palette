import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import{ withStyles } from '@material-ui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 240;

const styles = {
  root:{
    display:'flex',

  },
  toolbar:{
    width: '100%',
    display:'flex',
    justifyContent:'space-between'
  },
  typography:{
    fontWeight:'bold'
  },
  btns:{
    display: 'flex',
    gap: '1rem',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection : 'row',
    justifyContent : 'space-between',
    height : '64px',
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


const PaletteFormNav = (props) => {
    const { 
        classes,
        open, 
        newPaletteName, 
        handleDrawerOpen, 
        handleSavePalette, 
        handleChangeInPaletteName 
    } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                {/* <Typography 
                    variant="h6" 
                    noWrap 
                    component="div"
                    sx = {{fontWeight:'bold', ...(open && {visibility:'hidden'})}}
                >
                    Your Palette
                </Typography> */}
                <div className={classes.btns}>
                <PaletteMetaForm 
                    newPaletteName = {newPaletteName}
                    handleSavePalette={handleSavePalette}
                    handleChangeInPaletteName = {handleChangeInPaletteName}
                  />
                  <Link to='/'>
                      <Button 
                        variant='outlined'
                        color='error'
                      >
                          Go Back
                      </Button>
                  </Link>
                </div>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default withStyles(styles)(PaletteFormNav);