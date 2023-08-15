import React from 'react';

import { Routes, Route} from "react-router-dom";
import './App.css';
import TextToSign from './component/Home/TextToSign'
import SignToText from './component/Home/SignToText';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignToText />} />
      <Route path='/TextTranslator' element={<TextToSign />} />
    </Routes>
  );
}

export default App;

//이거 따라서 했는데 browser라우터 같이 못쓴다 오류뜸
//https://velog.io/@jaeochoiii/React-Router%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99