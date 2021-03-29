import React from 'react'
import { Button } from 'react-bootstrap';
import ItemFoundGoods from "../ItemFoundGoods/ItemFoundGoods";
import style from "./FoundGoods.module.css";

const FoundGoods = ({ foundGoods, deleteGoods, deleteSearch }) => {
    return (
        <div>
            <Button className={style.deleteSearch} onClick={() => { deleteSearch(); }} variant="danger">Delete search</Button>
            {foundGoods.map(item => {
                return (
                    <ItemFoundGoods key={item.id} deleteSearch={deleteSearch} goods={item} deleteGoods={deleteGoods} />
                )
            })}
        </div>
    )
}

export default FoundGoods;