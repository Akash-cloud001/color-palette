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
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default PaletteMetaForm;