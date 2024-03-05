import React from "react";
import styles from './Advantages.module.css';

import line from '../../images/linne.png';
import build from '../../images/house.svg';
import disket from '../../images/diskette-save-svgrepo-com.svg';
import device from '../../images/device-hardware-electronic-svgrepo-com.svg';
import discount from '../../images/discount-promo-ecommerce-svgrepo-com.svg';

function Advantages() {
    return(
        <section id="advantages" className={styles.advantages}>
                <div className={styles.advantages_wrapper}>
                    <h2 className={styles.advantages_title}>ПОЧЕМУ НАША КОМПАНИЯ</h2>
                    <img src={line} alt="Черная линия" className={styles.line_about}></img>
                    <p className={styles.advantages_subtitle}>Почему тысячи клиентов выбирают нас каждый день</p>
                    <div className={styles.grid}>
                        <div className={styles.various}>
                            <div className={styles.img_container}>
                                <img className={styles.qwer} src={build}></img>
                            </div>
                            <h3 className={styles.various_title}>ОПЫТ РАБОТЫ БОЛЕЕ 10 ЛЕТ</h3>
                            <p className={styles.various_text}>Вот уже более 10 лет мы ведем историю и<br />помогаем людям</p>
                        </div>
                        <div className={styles.various}>
                            <div className={styles.img_container}>
                                <img className={styles.qwer} src={disket}></img>
                            </div>
                            <h3 className={styles.various_title}>ГАРАНТИЯ КАЧЕСТВА 100%</h3>
                            <p className={styles.various_text}>Мы гарантируем качественное оказание услуги и<br />даем гарантию на 5 лет</p>
                        </div>
                        <div className={styles.various}>
                            <div className={styles.img_container}>
                                <img className={styles.qwer} src={device}></img>
                            </div>
                            <h3 className={styles.various_title}>ВЫСОКОКАЧЕСТВЕННОЕ<br />ОБОРУДОВАНИЕ</h3>
                            <p className={styles.various_text}>В своей работе мы используем новейшее<br />оборудование</p>
                        </div>
                        <div className={styles.various}>
                            <div className={styles.img_container}>
                                <img className={styles.qwer} src={discount}></img>
                            </div>
                            <h3 className={styles.various_title}>СКИДОЧНАЯ ПРОГРАММА<br />ЛОЯЛЬНОСТИ</h3>
                            <p className={styles.various_text}>Своим постоянным клиентам мы делаем скидки до 75% на весь ассортимент</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Advantages;