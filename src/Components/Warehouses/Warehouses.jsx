import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import TileListWarehouse from '../TilesWarehouses/TileListWarehouses';
import TilesWarehouses from '../TilesWarehouses/TileWarehouses';
import style from "./Warehouses.module.css";
import close from "../../assets/close.svg"

const Warehouses = ({ warehouses, addWarehouse, deleteWarehouse }) => {
    const [isVisibleAddWindow, setIsVisibleAddWindow] = React.useState(false);
    const [warehouseName, setWarehouseName] = React.useState("");

    const onAdd = () => {
        addWarehouse(warehouseName);
        setIsVisibleAddWindow(false);
        setWarehouseName("");
    }

    return (
        <Container>
            <div className={style.addWarehouse}>
                <div className={style.openAddWarehouseWindow}>
                    {!isVisibleAddWindow &&
                        <Button onClick={() => { setIsVisibleAddWindow(true); }}>Add new warehouse</Button>
                    }
                </div>
                {isVisibleAddWindow &&
                    <div className={style.addWarehouseWindow}>
                        <img
                            onClick={() => {
                                setIsVisibleAddWindow(false);
                                setWarehouseName("");
                            }}
                            className={style.closeButton}
                            src={close}
                            alt="close"
                        />
                        <h1>Add warehouse</h1>
                        <div className={style.warehouseName}>
                            <input value={warehouseName} onChange={(e) => { setWarehouseName(e.target.value) }} />
                        </div>
                        <div className={style.addButton}>
                            <button onClick={() => {
                                onAdd();
                            }}
                                className={style.addButton}
                            >Add</button>
                        </div>
                    </div>
                }
            </div>
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