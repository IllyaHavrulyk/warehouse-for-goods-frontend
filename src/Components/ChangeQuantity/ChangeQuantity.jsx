import React, { useEffect } from 'react'
import style from './ChangeQuantity.module.css';
import close from "../../assets/close.svg"
const ChangeQuantity = ({ action, setChangeQuantity, name }) => {
    const [quantity, setQuantity] = React.useState("");
    const [isCreateNewGoods, setIsCreateNewGoods] = React.useState(false);
    const [isInteger, setIsInteger] = React.useState(true);
    useEffect(() => {
        let tempQuantity = Number(quantity);
        if (!Number.isInteger(tempQuantity)) {
            setIsInteger(false);
        }
        if (Number.isInteger(tempQuantity) && !isInteger) {
            setIsInteger(true);
        }
    }, [quantity])

    return (
        <div className={style.priceFilter}>
            <img
                onClick={() => {
                    setChangeQuantity({ name: null, isOpenWindowChange: false, idItemForChangeQuantity: null });
                }}
                className={style.closeButton}
                src={close}
                alt="close"
            />
            <h1>Change Quantity</h1>
            <div className={style.inputChangeQuantity + " " + (isInteger ? "" : style.error)}>
                <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                {
                    name === "plus" &&
                    <div className={style.checkbox}>
                        <span >Create new Goods</span>
                        <input type="checkbox" value={isCreateNewGoods} onChange={(e) => { setIsCreateNewGoods(e.target.value) }} />
                    </div>
                }
            </div>
            <div className={style.editQuantity}>
                <button disabled={!isInteger} onClick={() => {
                    action(quantity, isCreateNewGoods);
                }}
                >Enter</button>
            </div>
        </div>
    )
}

export default ChangeQuantity;
