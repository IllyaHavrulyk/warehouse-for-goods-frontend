import { Button, Form, FormControl, Nav, Navbar, Card, CardGroup, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import React from 'react'

const Tiles = ({ goods, gridMarkup }) => {
    return (

        <CardGroup style={{margin: gridMarkup === "remaining" ? " auto": null }}>
            {
                goods.map((item, index) => (
                    <Col md={gridMarkup === "remaining" ? true : 3} xs sm={gridMarkup === "remaining" ? true : 2} key={index}>
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img_url} style={{ maxWidth: 25 + "%", height: "auto", margin: 0 + " auto" }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))
            }
        </CardGroup >
    )
}

export default Tiles;