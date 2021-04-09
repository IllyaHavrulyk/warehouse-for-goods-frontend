import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, Card, CardGroup, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TilesWarehouses from './TileWarehouses';

const TileListWarehouse = ({ warehouses, deleteWarehouse }) => {
    const warehousesIntegralOffset = warehouses.length % 4;
    const warehousesWithoutRemainder = warehouses.slice(0, warehouses.length - warehousesIntegralOffset);
    const warehouseRowsIntegral = renderRows(warehousesWithoutRemainder);
    function renderRows(rows) {
        let array = [];
        let tempArray = [];
        for (let i = 0; i < rows.length; i++) {
            if ((i + 1) % 4 === 0) {
                tempArray.push(rows[i]);
                array.push(tempArray);
                tempArray = [];
                continue;
            }
            tempArray.push(rows[i]);
        }
        return array;
    }
    return (
        (warehouseRowsIntegral.map((row, index) => (
            <Row key={index}>
                <TilesWarehouses
                    deleteWarehouse={deleteWarehouse}
                    warehouses={row}
                />
            </Row>
        ))
        ));
}

export default TileListWarehouse;
