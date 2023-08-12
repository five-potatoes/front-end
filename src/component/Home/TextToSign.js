import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Translator from '../function/Translator'
// import styles from '../styles/Body.module.css'

const TextToSign = () => {
    return (
        <>
            <Header />
            <body>
                <div>
                    <div>
                        <textarea>안녕하세요</textarea>
                    </div>

                    <button>비디오</button>

                    <div>
                        <button>녹음</button>
                        <button>시작</button>
                        <button onClick={() => {Translator("video");}}>번역</button>
                    </div>
                </div>
            </body>
            <Footer/>
        </>
    )
}

export default TextToSign;