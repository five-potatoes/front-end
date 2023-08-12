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
    /* const [showInitialBody, setShowInitialBody] = useState(true);

    const handleToggleBody = () => {
    setShowInitialBody(!showInitialBody);
    }; */

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
                    <div>
                        <Webcam className={styles.Webcam} mode={"sign"} />
                        <div>
                            <button className={styles.transBtn} onClick={() => { Translator("video"); }}>번역</button>
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
            {/* {showInitialBody ? <Body1 /> : <Body2 />}*/}
            {/* <button onClick={handleToggleBody}>
            {showInitialBody ? 'Show Body 2' : 'Show Body 1'}
            </button> */}
        </>
    )
}

export default SignToText;

