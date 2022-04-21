import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./component/navbar/Navbar";
import Products from "./pages/products/Products";

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