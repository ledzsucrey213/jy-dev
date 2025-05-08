import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

const App = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Router>
      <Navbar />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0C0D40" },
          fpsLimit: 60,
          particles: {
            number: { value: 10 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.15 },
            size: { value: 200, random: true },
            move: { enable: true, speed: 1 },
          },
          detectRetina: true,
        }}
        className="particles-bg"
      />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 