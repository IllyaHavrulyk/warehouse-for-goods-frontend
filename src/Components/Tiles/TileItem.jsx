import { Button, Card, CardGroup, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import React from "react";
import plus from "../../assets/plusQuantity.svg";
import minus from "../../assets/minus.svg"
import Slide from "@material-ui/core/Slide";
import style from "./TileItem.module.css";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import ChangeQuantity from "../ChangeQuantity/ChangeQuantity";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Tiles = ({ goods, gridMarkup, deleteGoods, changeQuantityForGoods, warehouseId }) => {
    const [open, setOpen] = React.useState(false);
    const [itemIdToDelete, setItemIdToDelete] = React.useState(-1);
    const [changeQuantity, setChangeQuantity] = React.useState({ name: null, isOpenWindowChange: false, idItemForChangeQuantity: null });

    const handleDeleteAndClose = () => {
        setOpen(false);
        let tempId = itemIdToDelete;
        setItemIdToDelete(-1);
        deleteGoods(tempId);
    }

    const handleClose = () => {
        setItemIdToDelete(0);
        setOpen(false);
    };

    const openWindowChangeQuantity = (name, id) => {
        setChangeQuantity({ name, isOpenWindowChange: true, idItemForChangeQuantity: id });
    }

    const onChangeQuantity = (quantity) => {
        changeQuantityForGoods(changeQuantity.idItemForChangeQuantity, changeQuantity.name, quantity);
        setChangeQuantity({ name: null, isOpenWindowChange: false, idItemForChangeQuantity: null });
    }

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
                                    Date added : {item.dateAdded.slice(0, 10)}
                                </Card.Text>
                                <Card.Text style={{ opacity: 0.8 }}>
                                    Quantity: {item.quantity}
                                    <img onClick={() => {
                                        openWindowChangeQuantity("plus", item.id);
                                    }}
                                        className={style.plus}
                                        src={plus}
                                        alt="plus"
                                    />
                                    <img onClick={() => {
                                        openWindowChangeQuantity("minus", item.id);
                                    }}
                                        className={style.minus}
                                        src={minus}
                                        alt="minus"
                                    />
                                </Card.Text>
                                {
                                    changeQuantity.isOpenWindowChange &&
                                    changeQuantity.idItemForChangeQuantity === item.id &&
                                    <ChangeQuantity action={onChangeQuantity} setChangeQuantity={setChangeQuantity} />
                                }
                                <NavLink to={`/warehouse/${warehouseId}/edit/${item.id}`}>
                                    <Button variant="success" style={{ margin: 10 + "px" }}>Edit </Button>
                                </NavLink>
                                <Button
                                    variant="danger"
                                    style={{ margin: 10 + "px" }}
                                    onClick={() => {
                                        setItemIdToDelete(item.id);
                                        setOpen(true);
                                    }}> Delete</Button>
                            </Card.Body>
                            <NavLink className={style.view} to={`/warehouse/${warehouseId}/view/${item.id}`}>
                                <Button variant="primary">View </Button>
                            </NavLink>
                        </Card>
                    </Col>
                ))
            }
            {open &&
                <ConfirmDelete
                    handleClose={handleClose}
                    open={open}
                    handleDeleteAndClose={handleDeleteAndClose}
                />}

        </CardGroup >
    )
}

export default Tiles;