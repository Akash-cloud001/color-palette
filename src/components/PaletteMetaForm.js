import React from 'react';
import{ withStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import '../styles/EmojiPicker.css';


const styles = {
  '@media (max-width:575px)':{
    dialog:{
      width: '320px',
      marginInline: 'auto',
    },
    dialogTitle:{
      padding: '8px 12px !important'
    },
    content:{
      padding: '8px 12px !important'

    },
    contentText:{
      fontSize: 'small !important',
      wordWrap : 'break-word'
    },
    action:{
      '& button':{
        fontSize:'small'
      }
    },
    
  }
  
}

const PaletteMetaForm = (props) => {
    const { classes,newPaletteName, handleSavePalette, handleChangeInPaletteName} = props;
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
        <Dialog open={openEmoji} onClose={handleCloseEmoji} className={classes.dialog}>
          <DialogTitle className={classes.dialogTitle}>Choose A Palette Emoji</DialogTitle>
          <Picker 
            title='Choose A Palette Emoji' 
            data = {data} 
            onEmojiSelect={savePalette} 
            dynamicWidth
            emojiButtonSize = '30'
            emojiSize = '20'
            maxFrequentRows = '2'
            navPosition='bottom'
            theme = 'light'
          />
        </Dialog>

        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
          <DialogTitle className={classes.dialogTitle}>Add Name</DialogTitle>
          <ValidatorForm 
                onSubmit={showEmojiPicker} 
                className={classes.form}
                style={{
                    display:'flex', 
                    flexDirection: 'column',
                    width:'max-content'
                }}
            >
          <DialogContent className={classes.content}>
            <DialogContentText className={classes.contentText}>
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
          <DialogActions className={classes.action}>
            <Button 
                variant='contained' 
                color='primary'
                type='submit'
                >
                Next
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </ValidatorForm>
        </Dialog>
      </div>
    );
}

export default withStyles(styles)(PaletteMetaForm);