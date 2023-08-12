// 번역 기능을 가진 버튼
import React, { useEffect, useState } from "react";
import axiosInstance from "../..";

const Translator = (data) => {

    const onClickSendText = () => {
        axiosInstance({
            method: "POST",
            url: "/t2v?text=text",
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log("fail");
            console.log(e);
        });
    };

    const onClickSendVideo = () => {
        axiosInstance({
            method: "POST",
            url: "/t2v?text=video",
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log("fail");
            console.log(e);
        });
    }

    if(typeof(data) === String) {
        return onClickSendText;
    } else {
        return onClickSendVideo;
    }
}

export default Translator;