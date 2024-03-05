import React from "react";
import styles from './Gallery.module.css';
import line from '../../images/linne.png';
import work1 from '../../images/1.jpg';
import work2 from '../../images/2.jpg';
import work3 from '../../images/3.jpg';
import work4 from '../../images/4.jpg';
import work5 from '../../images/5.jpg';
import work6 from '../../images/6.jpg';


function Gallery() {
    return(
        <section className={styles.gallery}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>НАШИ ПРООЕКТЫ</h2>
                <img src={line} alt="Черная линия" className={styles.line}></img>
                <p className={styles.subtitle}>
                    Сюда вы можете добавить фотографии товаров, способов их применения, результатов 
                    использования или просто фото с места производства (офиса) предприятия
                </p>
                <div className={styles.photos}>
                    <div className={styles.photo_container}>
                        <img src={work1} alt="Пример работ" className={styles.image}></img>
                    </div>
                    <div className={styles.photo_container}>
                        <img src={work2} alt="Пример работ" className={styles.image}></img>
                    </div>
                    <div className={styles.photo_container}>
                        <img src={work3} alt="Пример работ" className={styles.image}></img>
                    </div>
                    <div className={styles.photo_container}>
                        <img src={work4} alt="Пример работ" className={styles.image}></img>
                    </div>
                    <div className={styles.photo_container}>
                        <img src={work5} alt="Пример работ" className={styles.image}></img>
                    </div>
                    <div className={styles.photo_container}>
                        <img src={work6} alt="Пример работ" className={styles.image}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;