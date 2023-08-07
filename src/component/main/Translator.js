// 번역 기능을 가진 버튼
import React from "react";
import TextToSpeak from "./TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";

const Translator = () => {

    return (
        <>
            <div className="test">hiiiii</div>
            <button onClick={() => { TextToSpeak('hello') }}>음성 변환</button>
            <CopyToClipboard text="test" onCopy={() => { alert("복사 완료!") }}><button>복사</button></CopyToClipboard>
        </>
    )
}

export default Translator;