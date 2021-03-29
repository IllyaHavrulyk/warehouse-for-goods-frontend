import { ButtonBase, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';
import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import style from './ItemFoundGoods.module.css';

const ItemFoundGoods = ({ goods, deleteGoods, deleteSearch }) => {
    const [open, setOpen] = React.useState(false);
    const [itemIdToDelete, setItemIdToDelete] = React.useState(-1);

    const handleDeleteAndClose = () => {
        setOpen(false);
        debugger;
        let tempId = itemIdToDelete;
        setItemIdToDelete(-1);
        deleteGoods(tempId);
    }

    const handleClose = () => {
        setItemIdToDelete(0);
        setOpen(false);
    };

    return (
        <Container>
            <Row>
                <Card className={style.card} style={{ width: '100%', marginTop: 30 + "px" }}>
                    <Card.Body >
                        <Card.Title >{goods.name}</Card.Title>
                        <Card.Text>
                            <p className={style.description}>
                                {goods.description.length > 200 ? goods.description.slice(0, 200) + "..." : goods.description}
                            </p>
                            <p className={style.quantity}>Quantity :{goods.quantity}</p>
                            <p className={style.price}>Price : {goods.price}</p>
                        </Card.Text>
                    </Card.Body>
                    <div className={style.groupButton}>
                        <div className={style.edit}>
                            <NavLink to={"/edit/" + goods.id}>
                                <Button variant="success">Edit </Button>
                            </NavLink>
                        </div>
                        <div className={style.view}>
                            <NavLink to={"/view/" + goods.id}>
                                <Button variant="primary">View </Button>
                            </NavLink>
                        </div>
                        <div className={style.delete}>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setItemIdToDelete(goods.id);
                                    setOpen(true);
                                }}> Delete</Button>
                        </div>
                    </div>
                </Card>
            </Row>
            {open &&
                <ConfirmDelete
                    handleClose={handleClose}
                    open={open}
                    handleDeleteAndClose={handleDeleteAndClose}
                />}
        </Container>

    )
}

export default ItemFoundGoods;
