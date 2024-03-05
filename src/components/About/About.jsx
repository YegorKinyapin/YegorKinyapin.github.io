import React from "react";
import styles from './About.module.css';
import drill from '../../images/drill.jpg';
import line from '../../images/linne.png';


function About() {
    return(
        <section className={styles.about} id="about">
                {/* <div className={styles.drill_container}> */}
                    <img src={drill} alt="Мужчина с дрелью" className={styles.drill}></img>
                {/* </div> */}
                <div className={styles.about_title_block}>
                    <h2 className={styles.about_title}>О КОМПАНИИ</h2>
                    <img src={line} alt="Черная линия" className={styles.line_about}></img>
                </div>
                <div className={styles.about_text_block}>
                    <p className={styles.about_text}>
                    Окна, двери, фасалы, перегородки, балконы, зимние сады и т.д. Для любых объектов:
                     квартир, домов, коммерческих помещений.
                    </p>
                    <p className={styles.about_text}>
                    Поможем подобрать алюминиевое остекление для Вас, оптимизировать бюджет и сэкономить до
                     40% затрат. Предлагаем на выбор разные профильные системы и фурнитуру.
                    </p>
                    <p className={styles.about_text}>
                    На все работы и материалы вы получаете гарантию до 5 лет службы. Срок гарантии зависит от вида материалов или деталей.
                    </p>
                </div>
            </section>
    )
}

export default About;