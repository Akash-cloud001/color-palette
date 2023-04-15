import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { HealthAndSafety } from '@mui/icons-material';


const PaletteMetaForm = (props) => {
    const {newPaletteName, handleSavePalette, handleChangeInPaletteName} = props;
    const [open, setOpen] = React.useState(false);
    const [openEmoji, setOpenEmoji] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseEmoji = () => {
      setOpenEmoji(false);
    };
    const showEmojiPicker =() => {
      handleClose();
      setOpenEmoji(true);
    }
    const savePalette = (newEmoji) => {
      handleSavePalette(newEmoji.native);
    }
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Save
        </Button>
        <Dialog open={openEmoji} onClose={handleCloseEmoji}>
          <DialogTitle>Choose A Palette Emoji</DialogTitle>
          <Picker title='Choose A Palette Emoji' data = {data} onEmojiSelect={savePalette} />
        </Dialog>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Name</DialogTitle>
          <ValidatorForm 
                onSubmit={showEmojiPicker} 
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