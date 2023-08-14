import React from "react";
import styles from '../styles/Header.module.css'

const  sTT= () => { //signToText
    document.location.href('../body/SignToText.js')
}

const  tTS= () => { //textToSign
    document.location.href('../body/TextToSign.js')
}

const Header = () => {
    return (
        <header className={styles.test}>
            <div>
                <img src="logo.png" alt="logo" className={styles.logo} width={100}/>
                <button onClick={sTT} className={styles.headbtn}>수화 번역</button>
                <button onClick={tTS} className={styles.headbtn}>글자 번역</button>
            </div>
        </header>
    )
}

export default Header;