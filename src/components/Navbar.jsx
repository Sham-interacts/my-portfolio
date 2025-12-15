
import React from "react";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="nav-left">
          <span>Shamshirun Ibrahim</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
