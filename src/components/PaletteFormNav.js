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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

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
                <Typography 
                    variant="h6" 
                    noWrap 
                    component="div"
                    sx = {{fontWeight:'bold', ...(open && {visibility:'hidden'})}}
                >
                    Your Palette
                </Typography>
                {/* <div className={classes.btns}>
                  <ValidatorForm 
                    onSubmit={handleSavePalette} 
                    style={{display:'flex' ,width:'max-content'}}
                  >
                    <TextValidator 
                      label="Palette Name" 
                      value={newPaletteName} 
                      onChange={handleChangeInPaletteName}
                      validators={['required', 'isPaletteNameUnique']}
                      errorMessages={["Enter Palette Name","Name already used!"]}
                    />
                    <Button 
                      variant='contained' 
                      color='primary'
                      type='submit'
                    >
                    Save
                    </Button>
                  </ValidatorForm>
                </div> */}
                  <Link to='/'>
                      <Button 
                        variant='contained'
                        color='secondary'
                      >
                          Go Back
                      </Button>
                  </Link>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default withStyles(styles)(PaletteFormNav);