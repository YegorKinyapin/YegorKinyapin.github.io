import React from "react";
import styles from './Map.module.css';


function Map() {
    return(
        <section className={styles.main}>
            <div className={styles.wrapper}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4eb2ac9f36cac6fb01ecc4c2966206bf7c934b5ca3ee62399ade8834c1f73949&amp;source=constructor" width="527" height="450" frameBorder="0"></iframe>
                <div className={styles.info}>
                    <h4 className={styles.title}>Контактная информация</h4>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <p className={styles.text}>
                            Санкт-Петербург Тельмана 16б.
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>
                            E-mail: alumstandart.spb@mail.ru
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>
                            Телефон: +7 967 538 14 54 отдела продаж
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>
                            Телефон: +7 967 538 14 54 отдела сбыта
                            </p>    
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>
                            Контактное лицо: Степанов В.И.
                            </p>
                        </li>
                    </ul>
                    <p className={styles.text_social}>Присоединяйтесь к нам в социальных сетях!</p>
                    <div className={styles.container}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map;