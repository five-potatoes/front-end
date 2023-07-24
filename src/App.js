import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
