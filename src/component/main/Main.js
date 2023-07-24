import React from "react";
import '../styles/Main.css'

const Main = () => {
    return (
        <>
            <img src="logo.png" alt="logo" width={200}/>
            <div className="test">메인 페이지! 폰트 점검용</div>
            <div className="default">비교용 기본 폰트</div>
        </>
    )
}

export default Main;