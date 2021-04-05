import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from 'react-router-dom';
import WarehouseSvg from "../../assets/warehouse.svg";
import HomeSvg from "../../assets/home.svg"
import PlusSvg from "../../assets/plus.svg";
import SearchSvg from "../../assets/search.svg";
import StatsSvg from "../../assets/stats.svg";
import style from "./Header.module.css";

const Header = ({ searchGoods, logout, warehouseId }) => {
    const [searchValue, setSearchValue] = React.useState("");

    const search = () => {
        searchGoods(searchValue);
    }

    const handleSubmit = event => {
        event.preventDefault();
        search();
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: "#2391E6" }} variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/home" > <img src={WarehouseSvg} width="30" height="30" className="d-inline-block align-top " /> <span className={style.navbarBrand}>WarehouseForGoods</span> </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home"><img src={HomeSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} /> Home</Nav.Link>
                        <Nav.Link href={`/warehouse/${warehouseId}/add`}><img src={PlusSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} />Add goods</Nav.Link>
                        <Nav.Link href="/stats"><img src={StatsSvg} width="20" height="20" className="d-inline-block" style={{ marginRight: 15 + "px" }} />Stats</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={handleSubmit}>
                        <img src={SearchSvg} width="20" height="20" className={`d-inline-block ${style.searchSvg}`} style={{ marginRight: 15 + "px" }} />
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className={`mr-sm-2 ${style.searchInput}`}
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                        <Button variant="outline-light" onClick={(e) => { e.preventDefault(); search() }} className={style.searchBtn}>Search</Button>
                    </Form>
                    <Button className={style.logoutButton} variant="danger" onClick={() => { logout() }}>Logout</Button>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default withRouter(Header);
