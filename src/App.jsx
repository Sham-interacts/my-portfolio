
import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
