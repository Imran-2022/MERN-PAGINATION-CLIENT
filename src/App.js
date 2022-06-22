import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Products from './components/products/Products';
function App() {

  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/product" element={<Products/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </>
  );
}

export default App;
