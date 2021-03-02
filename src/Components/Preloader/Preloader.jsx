import React from 'react'
import load from '../../assets/load.gif';
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={load} alt="preloader" />
        </div>
    )
}

export default Preloader;
