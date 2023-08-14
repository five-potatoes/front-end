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
                            <button onClick={handleButton} className={styles.transbtn}>음성 변환</button>
                            <CopyToClipboard text={text} className={styles.copybtn}><button>복사</button></CopyToClipboard>
                        </div>
                        
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default SignToText;

