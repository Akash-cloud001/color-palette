import * as React from 'react';
import { useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import DragColorBox from './DragColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router';


// 240px
const drawerWidth = 300;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      // padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
CreateNewPalette.defaultProps={
  maxColors : 20
};

export default function CreateNewPalette(props) {
    const navigate = useNavigate();
    const { palettes,savePalette,maxColors } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [currentColor, setCurrentColor] = React.useState('teal');
    const [colorsArray, setColorsArray] = React.useState(palettes[0].colors);
    const [newColorName, setNewColorName] = React.useState('');
    const [newPaletteName, setNewPaletteName] = React.useState('');
    const updateCurrentColor=(newColor)=>{
        setCurrentColor(newColor.hex);
    };
    const isPaletteFull = colorsArray.length >= maxColors;
    const addNewColor = ()=>{
      const newColor = {
        color: currentColor,
        name: newColorName
      }
      setColorsArray([...colorsArray, newColor]);
      setNewColorName('');
    };

    const handleChange = (e)=>{
      setNewColorName(e.target.value);
    }

    const handleChangeInPaletteName = (e)=>{
      setNewPaletteName(e.target.value);
    }

    const handleDeletePalette = (colorName)=>{
      setColorsArray(colorsArray.filter(color => color.name !== colorName))
    }

    const clearColors = ()=>{
      setColorsArray([]);
    }

    const randomColor = ()=>{
      //pick  one random exisitng palettes
      const allColors = palettes.map(p => p.colors).flat();
      let random = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[random];
      setColorsArray([...colorsArray, randomColor]);
      console.log(allColors);
    }
    const handleSavePalette = () =>{
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g,"-"),
        emoji: '✅',
        colors: colorsArray
      }
      savePalette(newPalette);
      navigate(-1);
    }

    // useEffect
    useEffect(()=>{
      ValidatorForm.addValidationRule("isColorNameUnique", value => 
        colorsArray.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      );
      ValidatorForm.addValidationRule("isColorUnique", value => 
        colorsArray.every(
          ({ color }) => color !== currentColor
        )
      );
      ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
        palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        )
      );
    },[currentColor,colorsArray])


    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='default'>
        <Toolbar width='100%'>
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
          >
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSavePalette} style={{display:'flex' ,width:'max-content'}}>
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
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
            
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
            <Typography variant='h4' fontSize={'large'} fontWeight={'bold'} width={'100%'}>
                Design Your Own Palette
            </Typography>
            <div>
                <Button 
                  variant='outlined' 
                  color='secondary' 
                  onClick={clearColors}
                >
                  Clear Palette
                </Button>
                <Button 
                  variant='outlined'
                  color='primary' 
                  onClick={randomColor}
                  disabled={isPaletteFull}
                >
                  Random Color
                </Button>
            </div>
            {/* Here Comes the form */}
            <ChromePicker 
                color={currentColor} 
                onChange={(newColor)=>{updateCurrentColor(newColor)}}
            />
            <ValidatorForm onSubmit={addNewColor}>
              <TextValidator 
                value = {newColorName}
                onChange = {handleChange}
                validators = {["required", "isColorNameUnique", "isColorUnique"]}
                errorMessages={["Color name required", "Name Already Taken", "Color already used"]}
              />
              <Button 
                variant='contained'  
                color='primary'
                style={{backgroundColor: isPaletteFull?"lightgrey":currentColor }}
                type='submit'
                disabled={isPaletteFull}
              >
                {isPaletteFull ? 'Palette Full' : 'Add Color'}
              </Button>
            </ValidatorForm>
            
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
          <div style={{height:'100%'}}>
            {colorsArray.map(color => (
              <DragColorBox 
                key={color.name}
                color={color.color} 
                name={color.name} 
                handleDelete={()=>handleDeletePalette(color.name)} 
              />
            ))}
          </div>
      </Main>
    </Box>
  )
}


