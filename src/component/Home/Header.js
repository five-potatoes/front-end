import React from "react";
import styles from '../styles/Header.module.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const movePage = useNavigate();
    const goToSign = () => movePage('/');
    const goToText = () => movePage('/TextTranslator');

    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setprevClick] = React.useState(null);

    const GetClick = (e) => {setCurrentClick(e.target.id);};

    return (
        <header className={styles.test}>
            <div>
                <img src="logo.png" alt="logo" className={styles.logo} width={100}/>

                <button className={styles.headbtn} onClick={goToSign}>수화 번역</button>
                <button className={styles.headbtn} onClick={goToText}>글자 번역</button>
            </div>  
        </header>
    )
}

export default Header;