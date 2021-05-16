import React from 'react'
import style from './Footer.module.css';
import telegramIMG from "../../assets/telegram.png";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.informationAboutSite}>
                TNTU - 2021 warehouse
            </div>
            <div className={style.links}>
                <a id="linkTelegram" href="https://teleg.one/warehouse_for_goods_bot">Join us on Telegram!
                 <img for="linkTelegram" className={style.telegramIMG} src={telegramIMG} />
                </a>

            </div>
        </footer>
    )
}

export default Footer;
