import React from 'react'
import { Button } from 'react-bootstrap';
import ItemFoundGoods from "../ItemFoundGoods/ItemFoundGoods";
import style from "./FoundGoods.module.css";

const FoundGoods = ({ foundGoods, deleteGoods, deleteSearch, changeQuantityForGoods, warehouseId }) => {
    return (
        <div>
            <Button className={style.deleteSearch} onClick={() => { deleteSearch(warehouseId); }} variant="danger">Delete search</Button>
            {foundGoods.map(item => {
                return (
                    <ItemFoundGoods
                        key={item.id}
                        deleteSearch={deleteSearch}
                        goods={item}
                        deleteGoods={deleteGoods}
                        changeQuantityForGoods={changeQuantityForGoods}
                    />
                )
            })}
        </div>
    )
}

export default FoundGoods;