import * as React from 'react';
import{ withStyles } from '@material-ui/styles';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = {
  root:{
    display:'flex',
    flexDirection:'column',
    gap: '1rem',
    alignItems:'center'
  },
  form:{
    display:'flex',
    flexDirection:'column',
    gap: '.25rem',
    alignItems:'center',
    width: '100%',
    '& button':{
      width: '95%'
    }
  }
}

const ColorPickerForm = (props) => {
    const {classes,currentColor, newColorName, addNewColor, updateCurrentColor,handleChange,isPaletteFull } = props;
    
    return (
        <div className={classes.root}>
            <ChromePicker 
                color={currentColor} 
                onChange={(newColor)=>{updateCurrentColor(newColor)}}
                className={classes.colorPicker}
            />
            <ValidatorForm onSubmit={addNewColor} className={classes.form}>
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
        </div>
  )
}

export default withStyles(styles)(ColorPickerForm);