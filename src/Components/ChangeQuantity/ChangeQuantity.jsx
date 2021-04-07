import React from 'react'
import style from './ChangeQuantity.module.css';
import close from "../../assets/close.svg"
const ChangeQuantity = ({ action, setChangeQuantity }) => {
    const [quantity, setQuantity] = React.useState("");

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
            </div>
            <div className={style.editQuantity}>
                <button onClick={() => {
                    action(quantity);
                }}
                >Enter</button>
            </div>
        </div>
    )
}

export default ChangeQuantity;
