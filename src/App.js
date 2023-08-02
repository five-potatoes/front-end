import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main';
import TextToSign from './component/main/TextToSign'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/TextToSign' element={<TextToSign />} />
    </Routes>
  );
}

export default App;
