// 글자>수화 음성/복사 기능
import React from "react";

const TextToSign = (_text) => {
    const url = "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyBhGohDPV3E3Bd9Zgo76eyxTC73f2bSZP0";
    const data = {
        input: {
            text: _text,
        },
        voice: {
            languageCode: 'ko-KR',
            name: 'ko-KR-Neural2-c',
            ssmlGender: 'MALE',
        },
        audioConfig: {
            audioEncoding: "MP3",
        },
    };
    const otherparam = {
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
        method: "POST",
    };
    // 사운드 생성
    fetch(url, otherparam)
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            console.log(res.audioContent); // base64
        })
        .catch((error) => {
            console.log(error);
        });
}

export default TextToSign;