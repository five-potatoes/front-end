// 글자>수화 음성/복사 기능

const TextToSpeak = (text) => {
    let voices = [];

    const setVoiceList = () => { // 디바이스에 내장된 voice 가져오기
        voices = window.speechSynthesis.getVoices();
    };

    setVoiceList();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = setVoiceList;
    }

    const speech = (txt) => {
        const lang = "ko-KR";
        const utterThis = new SpeechSynthesisUtterance(txt);

        utterThis.lang = lang;
        
        // 한국어 voice 찾기
        const kor_voice = voices.find(
            (elem) => elem.lang === lang || elem.lang === lang.replace("-","_")
        )
        if (kor_voice) {
            utterThis.voice = kor_voice;
        } else {
            return;
        }
    }

    speech(text);
}

export default TextToSpeak;