import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

import ProcessClassic from "./pages/Process/Classic";
import ProcessStepByStep from "./pages/Process/StepByStep";
import ProcessExpress from "./pages/Process/Express";
import ProcessIterative from "./pages/Process/Iterative";
import ProcessAllInclusive from "./pages/Process/AllInclusive";

export const LanguageContext = React.createContext();

const App = () => {
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection si l’écran est mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // ✅ Ne pas activer le curseur custom sur mobile
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
  }, [isMobile]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "#0C0D40" },
            fpsLimit: 60,
            particles: {
              number: { value: isMobile ? 4 : 10 }, // ✅ moins de particules sur mobile
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.15 },
              size: { value: isMobile ? 100 : 200, random: true }, // ✅ plus petites sur mobile
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
            <Route path="/process/classic" element={<ProcessClassic />} />
            <Route path="/process/step-by-step" element={<ProcessStepByStep />} />
            <Route path="/process/express" element={<ProcessExpress />} />
            <Route path="/process/iterative" element={<ProcessIterative />} />
            <Route path="/process/all-inclusive" element={<ProcessAllInclusive />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};


export default App;
