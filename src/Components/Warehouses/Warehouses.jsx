import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import TileListWarehouse from '../TilesWarehouses/TileListWarehouses';
import TilesWarehouses from '../TilesWarehouses/TileWarehouses';

const Warehouses = ({ warehouses, addWarehouse, deleteWarehouse }) => {

    const onAdd = () => {
        const warehouseName = window.prompt("Enter name new warehouse");
        if (warehouseName) {
            addWarehouse(warehouseName);
        }
    }

    return (
        <Container>
            <Button onClick={() => { onAdd(); }}>Add new warehouse</Button>
            <TileListWarehouse warehouses={warehouses} deleteWarehouse={deleteWarehouse} />
            <Row>
                <TilesWarehouses
                    deleteWarehouse={deleteWarehouse}
                    warehouses={warehouses.slice(warehouses.length - (warehouses.length % 4), warehouses.length)}
                    gridMarkup={"remaining"}
                />
            </Row>
        </Container>
    )
}

export default Warehouses;