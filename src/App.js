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
