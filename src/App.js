import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
