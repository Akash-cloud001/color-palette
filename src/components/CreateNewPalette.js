import * as React from 'react';
import { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import{ withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import DragColorBox from './DragColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { DRAWER_WIDTH } from '../constants/constant';

// 240px
const drawerWidth = DRAWER_WIDTH;

const styles ={
  btns:{
    display:'flex',
    flexDirection:'column',
    width : '80%',
    marginInline: 'auto',
    alignItems: 'center',
    gap: '1rem',
    margin : '1rem 0px'
  }
}

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

 function CreateNewPalette(props) {
    const navigate = useNavigate();
    const { classes,palettes,savePalette,maxColors } = props;
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
    const handleSavePalette = (newEmoji) =>{
      console.log(newEmoji);
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g,"-"),
        emoji: newEmoji,
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
      <PaletteFormNav 
        open={open} 
        newPaletteName = {newPaletteName}
        handleDrawerOpen={handleDrawerOpen}
        handleSavePalette = {handleSavePalette}
        handleChangeInPaletteName = {handleChangeInPaletteName}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            justifyContent:'space-between',
            alignItems: 'center'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >

            <Typography variant='h4' fontSize={'medium'} fontWeight={'bold'} flexGrow={1}>
                Design Your Own Palette
            </Typography>

            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          
        </DrawerHeader>
          {/* Here Comes the form */}
          <ColorPickerForm 
            currentColor = {currentColor}
            newColorName = {newColorName}
            addNewColor = {addNewColor}
            updateCurrentColor = {updateCurrentColor}
            handleChange = {handleChange}
            isPaletteFull = {isPaletteFull}
          />
                      
          <div className={classes.btns}>
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


export default withStyles(styles)(CreateNewPalette);