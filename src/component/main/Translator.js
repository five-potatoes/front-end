// 번역 기능을 가진 버튼
import React, { useEffect, useState } from "react";
import TextToSpeak from "./TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";

const Translator = () => {
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
            <input onChange={handleInput} value={text} />
            <button onClick={handleButton}>음성 변환</button>
            <CopyToClipboard text="test" onCopy={() => { alert("복사 완료!") }}><button>복사</button></CopyToClipboard>
        </>
    )
}

export default Translator;