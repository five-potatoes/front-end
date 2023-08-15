import React from "react";
import { useEffect, useState } from "react";
import styles from '../styles/SignToText.module.css'
import Footer from "./Footer";
import Header from "./Header";
import Translator from "../function/Translator";
import TextToSpeak from "../function/TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
import Webcam from "../function/Webcam";

const SignToText = () => {

  const [text, setText] = useState("test");

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e) => {
    setText(e.target.value);
  };

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
                </div>
            </body>
            <Footer />
        </>
    )
}

export default SignToText;
