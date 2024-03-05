import React from "react";
import styles from './Product.module.css';

import line from '../../images/linewhite.png';
import number1 from '../../images/number-one-thin-svgrepo-com.svg';
import number2 from '../../images/number-two-thin-svgrepo-com.svg';
import number3 from '../../images/number-three-thin-svgrepo-com.svg';
import number4 from '../../images/number-four-thin-svgrepo-com.svg';
import number5 from '../../images/number-five-thin-svgrepo-com.svg';
import number6 from '../../images/number-six-thin-svgrepo-com.svg';



function Product() {
    return(
        <section className={styles.product}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Этапы работы над проектом</h2>
                <img src={line} alt='Белая линия' className={styles.line}></img>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <img src={number1} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Вы оставляете заявку в форме на сайте, либо пишете нам на электронную почту
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src={number2} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Подготовка КП, уточнение информации по телефону или<br />выезд на объект *
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src={number3} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Согласование стоимости и сроков выполнения работ
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src={number4} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Подписание договора,<br />согласование проекта
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src={number5} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Выполнение работ в сроки<br />согласно договора
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src={number6} alt='Цифра' className={styles.number}></img>
                        <p className={styles.text}>
                        Сдача работ и исполнительной документации
                        </p>
                    </div>
                </div>
                {/* <p className={styles.text}>
                    Если у вас есть возможность увидеть только один город в Италии, то пусть это будет Рим, великий,
                    многогранный, одновременно шумный и уютный, узнаваемый и не до конца известный. Ехать на 2-3 дня сюда,
                    если вы едете впервые и в город, и в страну, — не самая лучшая идея. Неделя — вот то количество времени,
                    которое можно считать адекватным.
                </p>
                <p className={styles.text}>
                    Планируя свои дни в городе, пожалуйста, отведите достаточно времени на то, чтобы увидеть не только Колизей,
                    Испанскую лестницу, площадь Навона и обалдеть от красоты и количества туристов, но и для того, чтобы 
                    познакомиться с другим, жилым, спокойным, но не менее красивым Римом. 
                </p> */}
            </div>
        </section>
    )
}

export default Product;