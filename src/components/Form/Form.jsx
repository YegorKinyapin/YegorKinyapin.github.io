import React from "react";
import styles from './Form.module.css';
import image from '../../images/form.jpg';

function Form() {
    return(
        <section id="form" className={styles.form}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h3 className={styles.title}>Есть нерешенные вопросы?</h3>
                    <p className={styles.subtitle}>Оставьте заявку на сайте и мы свяжемся с Вами!</p>
                    <form action="https://formsubmit.co/d1key00@mail.ru" method="POST">
                    <div className={styles.first}>
                        <label className={styles.label} htmlFor="name">Введите имя:</label>
                        <input className={styles.input} type="text" id="name" name="name" placeholder="Введите имя" required />
                    </div>
                    <div className={styles.first}>
                        <label className={styles.label} htmlFor="email">Введите email:</label>
                        <input className={styles.input} type="email" id="email" name="email" placeholder="Введите email" required />
                    </div>
                    <div className={styles.first}>
                        <label className={styles.label} htmlFor="phone">Введите телефон:</label>
                        <input className={styles.input} type="tel" id="phone" name="phone" placeholder="Введите телефон" required />
                    </div>
                    <button className={styles.button} type="submit">Получить консультацию</button>
                </form>
                </div>
                <div className={styles.right}>
                    <img src={image} alt="Пример работ" className={styles.image}></img>
                </div>
            </div>
        </section>
    )
}

export default Form;