import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import style from './ItemFoundGoods.module.css';
import plus from "../../assets/plusQuantity.svg";
import minus from "../../assets/minus.svg";
import ChangeQuantity from "../ChangeQuantity/ChangeQuantity";

const ItemFoundGoods = ({ goods, deleteGoods, changeQuantityForGoods, warehouseId }) => {
    const [open, setOpen] = React.useState(false);
    const [itemIdToDelete, setItemIdToDelete] = React.useState(-1);
    const [changeQuantity, setChangeQuantity] = React.useState({ name: null, isOpenWindowChange: false, idItemForChangeQuantity: null });

    const handleDeleteAndClose = () => {
        setOpen(false);
        let tempId = itemIdToDelete;
        setItemIdToDelete(-1);
        deleteGoods(tempId, warehouseId);
    }

    const handleClose = () => {
        setItemIdToDelete(0);
        setOpen(false);
    };
    const openWindowChangeQuantity = (name, id) => {
        setChangeQuantity({ name, isOpenWindowChange: true, idItemForChangeQuantity: id });
    }

    const onChangeQuantity = (quantity, isCreateNewGoods) => {
        changeQuantityForGoods(changeQuantity.idItemForChangeQuantity, changeQuantity.name, quantity, isCreateNewGoods);
        setChangeQuantity({ name: null, isOpenWindowChange: false, idItemForChangeQuantity: null });
    }

    return (
        <Container>
            <Row>
                <Card className={style.card} style={{ width: '100%', marginTop: 30 + "px" }}>
                    <Card.Body >
                        <Card.Title >{goods.name}</Card.Title>
                        <Card.Text>
                            <span className={style.description}>
                                {goods.description.length > 200 ? goods.description.slice(0, 200) + "..." : goods.description}
                            </span>
                            <span className={style.quantity}>Quantity :{goods.quantity}
                                <img onClick={() => {
                                    openWindowChangeQuantity("plus", goods.id);
                                }}
                                    className={style.plus}
                                    src={plus}
                                    alt="plus"
                                />
                                <img onClick={() => {
                                    openWindowChangeQuantity("minus", goods.id);
                                }}
                                    className={style.minus}
                                    src={minus}
                                    alt="minus"
                                />
                            </span>
                            <span className={style.price}>Price : {goods.price}</span>
                        </Card.Text>
                        {
                            changeQuantity.isOpenWindowChange &&
                            changeQuantity.idItemForChangeQuantity === goods.id &&
                            <ChangeQuantity action={onChangeQuantity} setChangeQuantity={setChangeQuantity} name={changeQuantity.name} />
                        }
                    </Card.Body>
                    <div className={style.groupButton}>
                        <div className={style.edit}>
                            <NavLink to={`/warehouse/${warehouseId}/edit/${goods.id}`}>
                                <Button variant="success">Edit </Button>
                            </NavLink>
                        </div>
                        <div className={style.view}>
                            <NavLink to={`/warehouse/${warehouseId}/view/${goods.id}`}>
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
