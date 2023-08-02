// 메뉴바
import React from "react";
import { useNavigate } from 'react-router-dom';
//import '../styles/Main.css

const Nav = () => {
    const movePage = useNavigate();
    const goToMain = () => movePage('/');
    const goToTranslator = () => movePage('/goToTranslator');
}

export default Nav;