import React from "react";
import styles from '../styles/Body.module.css'
//https://stickode.tistory.com/663

const SignToText = () => {
    return (
        <body>
            <div className={styles.body}>
                <div>
                    <div className={styles.video}></div>
                    <div>
                        <button className={styles.recordBtn}>녹음</button>
                        <button className={styles.playBtn}>시작</button>
                        <button className={styles.transBtn}>번역</button>
                        </div>
                    </div>
                

                <div>
                    <textarea className={styles.text}></textarea>
                </div>

                
            </div>
            
        </body>
    )
}

export default SignToText;

