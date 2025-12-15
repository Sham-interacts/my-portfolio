import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="badge">
          <span className="badge-dot" />
          Open to frontend roles
        </div>
        <h1 className="hero-title">
          Frontend developer crafting clean, responsive user interfaces.
        </h1>
        <p className="hero-subtitle">
          Front-End Developer with 4+ years of experience building scalable,
          enterprise-grade web applications. I specialise in React-based UI
          development, reusable component design, and performance-focused
          frontend architecture.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View my work →
          </a>
          <a href="#contact" className="btn-ghost">
            Contact me →
          </a>
        </div>
      </div>

      <aside className="hero-card">
        <div>
          <div className="hero-card-title">Profile snapshot</div>
          <div className="hero-pill-row">
            <span className="pill">B.E – Information Science</span>
            <span className="pill">4+ years in frontend</span>
            <span className="pill">Bangalore, India</span>
          </div>
        </div>
        <div className="hero-metric">
          <div>
            <div className="hero-card-title">What I focus on</div>
            <div>
              Clean, reusable components, performance-optimised UIs, and
              accessible frontend architecture that scales across products.
            </div>
          </div>
        </div>
        <div>
          <div className="hero-card-title">Tech comfort zone</div>
          <div className="hero-pill-row">
            <span className="pill">React</span>
            <span className="pill">Modern JS</span>
            <span className="pill">REST APIs</span>
            <span className="pill">component-driven UI development</span>
            <span className="pill">Git &amp; GitHub</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
