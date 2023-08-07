import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Translator from './component/main/Translator';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Translator />} />
    </Routes>
  );
}

export default App;
