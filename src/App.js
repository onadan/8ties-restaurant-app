import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Products from "./component/products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />     

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
      
      </BrowserRouter>

    </div>
  );
}


export default App;