import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from 'react-router-dom';
import WarehouseSvg from "../../assets/warehouse.svg";
import HomeSvg from "../../assets/home.svg"
import PlusSvg from "../../assets/plus.svg";
import SearchSvg from "../../assets/search.svg";
import style from "./Header.module.css";

const Header = ({ searchGoods, logout }) => {
    const [searchValue, setSearchValue] = React.useState("");

    const search = () => {
        searchGoods(searchValue);
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: "#2391E6" }} variant="dark">
                <Navbar.Brand href="/home" > <img src={WarehouseSvg} width="30" height="30" className="d-inline-block align-top" style={{ marginRight: 15 + "px" }} />  WarehouseForGoods</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home"><img src={HomeSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} /> Home</Nav.Link>
                    <Nav.Link href="/add"><img src={PlusSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} />Add goods</Nav.Link>
                </Nav>
                <Form inline>
                    <img src={SearchSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} />
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value); }}
                    />
                    <Button variant="outline-light" onClick={() => { search() }}>Search</Button>
                </Form>
                <Button className={style.logoutButton} variant="danger" onClick={() => { logout() }}>Logout</Button>
            </Navbar>
        </div>
    )
}

export default withRouter(Header);