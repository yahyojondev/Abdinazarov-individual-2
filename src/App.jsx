import { useState } from "react";
import Navbar from "./components/navabar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Conatct";
import Product from "./pages/product/Product";
import Brand from "./pages/brands/Brand";
import "swiper/css";
import "swiper/css/pagination";
import Trt from "./pages/trt/Trt";
import TrtOne from "./pages/trtOne/TrtOne";
import Nazariya from "./pages/nazariya/Nazariya";
import NazariyaOne from "./pages/nazariyaOne/NazariyaOne";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/brands" element={<Brand />} />
        <Route path="/trt" element={<Trt />} />
        <Route path="/trtOne" element={<TrtOne />} />
        <Route path="/nazariya" element={<Nazariya />} />
        <Route path="/nazariyaOne" element={<NazariyaOne />} />
      </Routes>
    </>
  );
}

export default App;
