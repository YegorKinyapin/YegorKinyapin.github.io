import React from "react";
import styles from './AppHeader.module.css';
import logo from '../../images/logo.jpg';
import vk from '../../images/vk-with-circle-svgrepo-com.svg';
import telegram from '../../images/telegram-svgrepo-com.svg';
import phone from '../../images/phone-svgrepo-com.svg';
import { Link, Element } from "react-router-dom";
import whatsapp from '../../images/whatsapp-128-svgrepo-com.svg'

function AppHeader() {
    return(
        <header className={styles.header}>
            <p className={styles.standart}>Алюмстандарт</p>
            {/* <img src={logo} alt="Логотип" className={styles.logo}></img> */}
            <div className={styles.block}>
                <nav className={styles.chapters}>
                    <ul className={styles.list}>
                        <li className={styles.element}>
                            <a href="#about" className={styles.element_link}>О компании</a>
                        </li>
                        <li className={styles.element}>
                            <a href="#advantages" className={styles.element_link}>Преимущества</a>
                        </li>
                        {/* <li className={styles.element}>
                            <a className={styles.element_link}>Стоимость</a>
                        </li>
                        <li className={styles.element}>
                            <a className={styles.element_link}>Отзывы</a>
                        </li> */}
                        <li className={styles.element}>
                            <a href="#footer" className={styles.element_link}>Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.links}>
                    <a href="#">
                        <img className={styles.link} src={vk} alt="kevflmd"></img>
                    </a>
                    <a href="#">
                        <img className={styles.link} src={whatsapp} alt="kevflmd"></img>
                    </a>
                    <a href="#">
                        <img className={styles.link} src={telegram} alt="kevflmd"></img>
                    </a>
                </div>
                <div className={styles.number}>
                    <a className={styles.phone_number}><img className={styles.phone} src={phone} alt="nvmd,"></img> +7 967 538 14 54</a>
                </div>
                <button className={styles.button}>Заказать звонок</button>
            </div>
            {/* <Header />
            <Main /> */}
            {/* <Footer /> */}
        </header>
    )
}

export default AppHeader;