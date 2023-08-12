import React from "react";
import { useEffect, useState } from "react";
import styles from '../styles/Body.module.css'
import Footer from "./Footer";
import Header from "./Header";
import Translator from '../function/Translator'
import TextToSpeak from "../function/TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
//https://stickode.tistory.com/663

const SignToText = () => {
    const [text, setText] = useState("ttest");

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
                    <div>
                        <div className={styles.video}></div>
                        <div>
                            <button className={styles.recordBtn}>녹음</button>
                            <button className={styles.playBtn}>시작</button>
                            <button className={styles.transBtn} onClick={() => {Translator("video");}}>번역</button>
                        </div>
                    </div>
                    <div>
                        <input className={styles.text} onChange={handleInput} value={text} />
                        <button onClick={handleButton}>음성 변환</button>
                        <CopyToClipboard text={text}><button>복사</button></CopyToClipboard>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default SignToText;

