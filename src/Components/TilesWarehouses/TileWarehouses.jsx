import { Button, Card, CardGroup, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import React from "react";
import Slide from "@material-ui/core/Slide";
import style from "./TileWarehouse.module.css";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TilesWarehouses = ({ warehouses, gridMarkup, deleteWarehouse }) => {
    const [open, setOpen] = React.useState(false);
    const [itemIdToDelete, setItemIdToDelete] = React.useState(-1);

    const handleDeleteAndClose = () => {
        setOpen(false);
        let tempId = itemIdToDelete;
        setItemIdToDelete(-1);
        deleteWarehouse(tempId);
    }

    const handleClose = () => {
        setItemIdToDelete(0);
        setOpen(false);
    };

    return (
        <CardGroup style={{ margin: gridMarkup === "remaining" ? " auto" : null }} >
            {
                warehouses.map((item, index) => (
                    <Col md lg={gridMarkup === "remaining" ? true : 3} xs sm={12} key={index}>
                        <Card key={item.id} style={{ width: '15rem', marginTop: 10 + "px" }}>
                            {/* <Card.Img variant="top" src={item.imgUrl} style={{ maxWidth: 25 + "%", height: "auto", margin: 0 + " auto" }} /> */}
                            <Card.Body >
                                <Card.Title >{item.name}</Card.Title>
                                <Button
                                    variant="danger"
                                    style={{ margin: 10 + "px" }}
                                    onClick={() => {
                                        setItemIdToDelete(item.id);
                                        setOpen(true);
                                    }}> Delete</Button>
                            </Card.Body>
                            <NavLink className={style.open} to={`/warehouse/${item.id}/home`}>
                                <Button variant="primary">Open</Button>
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

export default TilesWarehouses;