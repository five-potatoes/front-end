import React from "react";
import styles from '../styles/Header.module.css'
import { useNavigate } from "react-router-dom";



const Header = () => {
    return (
        <header className={styles.test}>
            <div>
                <img src="logo.png" alt="logo" className={styles.logo} width={100}/>
                <button className={styles.headbtn}>수화 번역</button>
                <button className={styles.headbtn}>글자 번역</button>
            </div>
        </header>
    )
}

export default Header;