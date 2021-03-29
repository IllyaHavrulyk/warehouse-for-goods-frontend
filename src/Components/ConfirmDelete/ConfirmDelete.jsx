import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import { Button } from 'react-bootstrap';

const ConfirmDelete = ({ open, handleClose, handleDeleteAndClose }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"You are sure you want to delete this item?"}</DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description">
                    click "yes" to delete or "no" if you do not want to delete
                    </DialogContentText>
            </DialogContent>
            <DialogActions >
                <Button onClick={handleClose} variant="outlined">No</Button>
                <Button onClick={handleDeleteAndClose} variant="primary" color="primary" >Yes</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDelete
