import React from "react";
import styles from './Main.module.css';
import FirstSlide from "../FirstSlide/FirstSlide";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Product from "../Product/Product";
import Gallery from "../Gallery/Gallery";
import Form from "../Form/Form";
import Map from "../Map/Map";

function Main() {
    return(
        <section className={styles.main}>
            <FirstSlide />
            <About />
            <Advantages />
            <Product />
            <Gallery />
            <Form />
            <Map />
        </section>
    )
}

export default Main;