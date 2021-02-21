import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/add">Add goods</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header;