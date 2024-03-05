import React from "react";
import styles from "./FirstSlide.module.css";
import line from '../../images/linne.png';


function FirstSlide() {
  return (
    <section className={styles.first_slide}>
      <div className={styles.wrapper}>
        <div className={styles.title_block}>
          <h1 className={styles.title}>
          Алюминиевые и противопожарные конструкции
          </h1>
          <img src={line} alt="Черная линия" className={styles.line}></img>
        </div>
        <p className={styles.text}>
          Устанавливаем пластиковые окна с климат-контролем. Пожизненная
          гарантия на окна. Скидки постоянным клиентам до 70%, стеклопакет в
          подарок.
        </p>
        <a href="#form" className={styles.application}>Оставить заявку</a>
      </div>
    </section>
  );
}

export default FirstSlide;
