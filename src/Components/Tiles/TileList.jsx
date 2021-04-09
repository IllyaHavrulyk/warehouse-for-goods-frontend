import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, Card, CardGroup, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import TileItem from './TileItem';

const TileList = ({ goods, deleteGoods, setGoodsView, changeQuantityForGoods, warehouseId }) => {
    const goodsIntegralOffset = goods.length % 4;
    const goodsWithoutRemainder = goods.slice(0, goods.length - goodsIntegralOffset);
    const goodsRowsIntegral = renderRows(goodsWithoutRemainder);
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
        (goodsRowsIntegral.map((row, index) => (
            <Row key={index}>
                <TileItem
                    changeQuantityForGoods={changeQuantityForGoods}
                    goods={row}
                    deleteGoods={deleteGoods}
                    setGoodsView={setGoodsView}
                    warehouseId={warehouseId}
                /> 
            </Row>
        ))
        ));
}

export default TileList;
