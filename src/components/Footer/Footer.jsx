import React from "react";
import styles from './Footer.module.css';
import logo from '../../images/logowhite.png';
import phone from '../../images/phonewhite.svg'

function Footer() {
    return(
        <footer id="footer" className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <p className={styles.standart}>Алюмстандарт</p>
                    {/* <img src={logo} alt='Логотип' className={styles.logo}></img> */}
                    <div className={styles.info}>
                        <p className={styles.address}>
                            ООО «СтройТрейд», 123456, г.Москва, ул. Центральная 1, офис 1<br />
                            ИНН 7811796717 КПП 781101001
                        </p>
                        <a className={styles.conf} href="#">Политика конфиденциальности</a>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.number_cont}>
                        <img src={phone} alt="Телефонная трубка" className={styles.phone}></img>
                        <p className={styles.number}>+7 967 538 14 54</p>
                    </div>
                    <div className={styles.links}>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;