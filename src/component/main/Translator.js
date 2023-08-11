// 번역 기능을 가진 버튼
import React, { useEffect, useState } from "react";
import TextToSpeak from "./TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
import axiosInstance from "../..";

const Translator = () => {
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


    const onClickSendText = () => {

        axiosInstance({
            method: "POST",
            url: "/",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
            },
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log("fail");
            console.log(e);
        });
    };

    return (
        <>
            <input onChange={handleInput} value={text} />
            <button onClick={handleButton}>음성 변환</button>
            <CopyToClipboard text={text}><button>복사</button></CopyToClipboard>
            <button onClick={onClickSendText}>BUTTON</button>
        </>
    )
}

export default Translator;