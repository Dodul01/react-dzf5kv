import React from "react";
import "./style.css";
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Nav from './Nav.jsx';
import About from './About.jsx';
import Product from './Product.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
