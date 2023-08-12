import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TextToSign from './component/Home/TextToSign'
import SignToText from './component/Home/SignToText';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignToText />} />
      <Route path='/Text' element={<TextToSign />} />
    </Routes>
  );
}

export default App;
