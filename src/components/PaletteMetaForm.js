import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const PaletteMetaForm = (props) => {
    const {newPaletteName, handleSavePalette, handleChangeInPaletteName} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Save
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Name</DialogTitle>
          <ValidatorForm 
                onSubmit={handleSavePalette} 
                style={{
                    display:'flex', 
                    flexDirection: 'column',
                    width:'max-content'
                }}
            >
          <DialogContent>
            <DialogContentText>
              Please enter a name for your Palette
            </DialogContentText>
               
                <TextValidator 
                    label="Palette Name" 
                    value={newPaletteName} 
                    onChange={handleChangeInPaletteName}
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={["Enter Palette Name","Name already used!"]}
                    fullWidth
                    margin='normal'
                />
                
          </DialogContent>
          <DialogActions>
            <Button 
                variant='contained' 
                color='primary'
                type='submit'
                >
                Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </ValidatorForm>
        </Dialog>
      </div>
    );
}

export default PaletteMetaForm;