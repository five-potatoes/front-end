import React from "react";
import { useEffect, useState } from "react";
import styles from '../styles/TextToSign.module.css'
import Footer from "./Footer";
import Header from "./Header";
import TextToSpeak from "../function/TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
import Webcam from "../function/Webcam";

const TextToSign = () => {

    const [text, setText] = useState("test");

    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleButton = () => {
        TextToSpeak(text);
    };

    return (
        <>
            <Header />
                <div className={styles.body}>
                    <div className={styles.trans}>
                        <textarea className={styles.text} onChange={handleInput} value={text} />
                        <div className={styles.btn}>
                            <button onClick={handleButton} >
                                <img src="img/소리.png" alt="소리" className={ styles.btnImg} />
                            </button>
                            <CopyToClipboard text={text} >
                                <button className={styles.soundCopy}>
                                    <img src="img/복사.png" alt="복사" className={ styles.btnImg}/>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className={styles.video}>
                        <Webcam mode={"text"} />
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default TextToSign;