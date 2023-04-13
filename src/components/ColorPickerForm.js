import * as React from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const ColorPickerForm = (props) => {
    const {currentColor, newColorName, addNewColor, updateCurrentColor,handleChange,isPaletteFull } = props;
    
    return (
    <div>
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
    </div>
  )
}

export default ColorPickerForm;