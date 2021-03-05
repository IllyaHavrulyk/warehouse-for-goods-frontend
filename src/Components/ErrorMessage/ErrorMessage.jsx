import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import React from 'react'
import { Button } from 'react-bootstrap';
import style from './ErrorMessage.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorMessage = ({ error, setIsErrorEndError }) => {
    const onClose = () => {
        setIsErrorEndError(false, null);
    }
    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className={style.error} id="alert-dialog-slide-title">{error}</DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description">
                    An error occurred, check your internet connection and reload the page
                </DialogContentText>
            </DialogContent >
            <DialogActions >
                <Button onClick={onClose} variant="primary" color="primary" >Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorMessage;
