import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section className="main-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
}

export default App;
