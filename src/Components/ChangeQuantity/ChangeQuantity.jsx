import React from 'react'
import style from './ChangeQuantity.module.css';
import close from "../../assets/close.svg"
const ChangeQuantity = ({ action, setChangeQuantity, name }) => {
    const [quantity, setQuantity] = React.useState("");
    const [isCreateNewGoods, setIsCreateNewGoods] = React.useState(false);

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
            <div className={style.inputChangeQuantity}>
                <input value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                {
                    name === "plus" &&
                    <div className={style.checkbox}>
                        <span >Create new Goods</span>
                        <input type="checkbox" value={isCreateNewGoods} onChange={(e) => { setIsCreateNewGoods(e.target.value) }} />
                    </div>
                }
            </div>
            <div className={style.editQuantity}>
                <button onClick={() => {
                    action(quantity, isCreateNewGoods);
                }}
                >Enter</button>
            </div>
        </div>
    )
}

export default ChangeQuantity;
