import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import style from "./Stats.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";
import WarehousesPerMonth from './WarehousesPerMonth';
import { ProductsPerMonth } from './ProductsPerMonth';
import { UsersPerMonth } from "./UsersPerMonth";
import WarehousesPerUser from "./WarehousesPerUser";
import { MultiAxisWarehouses } from "./MultiAxisWarehouses";
export default function Stats({ stats }) {

    return (
        <Fragment>
            <Container>
                <h2>Popular stats</h2>
                <Row>
                    <Col md="6"><WarehousesPerMonth stats={stats.warehousesCreatedPerEveryMonth} /><h4>Warehouses created per month</h4></Col>
                    <Col md="6"><ProductsPerMonth stats={stats.productsCreatedPerEveryMonth} /><h4>Products created per every month</h4></Col>
                </Row>
                <Row>
                    <Col md="12"><MultiAxisWarehouses stats={stats} /><h4>Average warehouses per user & products created per warehouse</h4></Col>
                </Row>
                <Row>
                    <Col md="6"><WarehousesPerUser stats={stats.warehousesPerUser} /><h4>User's warehouses</h4></Col>
                    <Col md="6"><UsersPerMonth stats={stats.usersRegisteredPerEveryMonth} /><h4>Users registered per month</h4></Col>


                </Row>
            </Container>

        </Fragment>

    )
}
