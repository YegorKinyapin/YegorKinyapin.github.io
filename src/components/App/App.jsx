import React from "react";
import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function App() {
    return(
        <div className={styles.main}>
            <AppHeader />
            <Main />
            <Footer />
        </div>
    )
}

export default App;