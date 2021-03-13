import React from 'react';
import style from './View.module.css';

const View = ({ goods }) => {
    let date = new Date(Date.parse(goods.dateAdded));
    return (
        <div className={style.main}>
            <div className={style.card}>
                <div className={style.container}>
                    <img src={goods.imgUrl} alt="picture" />
                </div>
                <div className={style.details}>
                    <h3>{goods.name}</h3>
                    <p>{goods.description}</p>
                    <div className={style.info}>
                        <div className={style.price}>{goods.price}</div>
                        <div className={style.count}>{goods.quantity}</div>
                        <div className={style.dateAdded}>{goods.dateAdded}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;
