import React from "react";
import Home from "./components/page/Home";
import Contact from "./components/page/Contact";
import About from "./components/page/About";
import { Routes, Link, Route } from "react-router-dom";

const Route = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Route;
