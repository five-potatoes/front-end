import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
import './assets/fonts/Font.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const axiosInstance = axios.create({
  baseURL: 'http://15.165.223.118:8080/translation/v2t',
  headers: { "Content-type": "application/json", "Access-Control-Allow-Origin":"*" },
  withCredentials: false,
});

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default axiosInstance;