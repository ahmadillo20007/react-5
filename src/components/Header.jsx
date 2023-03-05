import {  Route, Routes } from "react-router-dom";
import React from "react";
import './Header.css'
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";



function Header() {
  return (
<div className="App">
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/' element={<About/>} />
    <Route path='/' element={<Blog/>} />
  </Routes>
</div>
  );
}

export default Header;
