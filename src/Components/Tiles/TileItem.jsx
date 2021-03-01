import { Button, Form, FormControl, Nav, Navbar, Card, CardGroup, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import React from "react";
import MaterialButton from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Tiles = ({ goods, gridMarkup, deleteGoods }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <CardGroup style={{ margin: gridMarkup === "remaining" ? " auto" : null }} >
            {
                goods.map((item, index) => (
                    <Col md lg={gridMarkup === "remaining" ? true : 3} xs sm={12} key={index}>
                        <Card key={item.id} style={{ width: '15rem', marginTop: 10 + "px" }}>
                            <Card.Img variant="top" src={item.imgUrl} style={{ maxWidth: 25 + "%", height: "auto", margin: 0 + " auto" }} />
                            <Card.Body >
                                <Card.Title >{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description.length > 60 ? item.description.slice(0, 60) + "..." : item.description}

                                </Card.Text>

                                <Card.Text style={{ opacity: 0.8 }}>
                                    Date added : {item.date_added}
                                </Card.Text>
                                <NavLink to={"/edit/" + item.id}>
                                    <Button variant="success" style={{ margin: 10 + "px" }}>Edit </Button>
                                </NavLink>
                                <Button
                                    variant="danger"
                                    style={{ margin: 10 + "px" }}
                                    onClick={() => {
                                        deleteGoods(item.id);
                                    }}> Delete</Button>
                            </Card.Body>

                            <Button variant="primary">View </Button>
                        </Card>
                    </Col>
                ))
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined">Disagree</Button>
                    <Button onClick={handleClose} variant="primary" color="primary" >Agree</Button>
                </DialogActions>
            </Dialog>

        </CardGroup >
    )
}

export default Tiles;