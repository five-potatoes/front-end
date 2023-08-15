import React from "react";
import { useEffect, useState } from "react";
import styles from '../styles/Body.module.css'
import Footer from "./Footer";
import Header from "./Header";
import Translator from '../function/Translator'
import TextToSpeak from "../function/TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
import Webcam from "../function/Webcam";
//https://stickode.tistory.com/663

const SignToText = () => {

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
            <body>
                <div className={styles.body}>
                    <div className={styles.video}>
                        <Webcam mode={"sign"} />
                    </div>
                    <div className={styles.trans}>
                        <textarea className={styles.text} onChange={handleInput} value={text} />
                        <div>
                            <button onClick={handleButton} className={styles.btn}>
                                <img src="img/소리듣기.png" alt=""/>
                            </button>
                            <CopyToClipboard text={text} className={styles.btn}>
                                <button>
                                    <img src="img/복사버튼.png" alt=""/>
                                </button>
                            </CopyToClipboard>
                        </div>
                        
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default SignToText;

