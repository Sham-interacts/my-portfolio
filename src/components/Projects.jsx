import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A few sample projects showcasing my frontend skills. (I’m actively
        adding more.)
      </p>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-title">Personal Portfolio</div>
          <p className="project-desc">
            This website. A simple, responsive portfolio built with semantic
            HTML and modern CSS, focusing on readability and clean layout.
          </p>
          <div className="project-links">
            <a href="#">Live demo</a>
            <a href="#">Code</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">React Dashboard (Coming soon)</div>
          <p className="project-desc">
            A dashboard with charts, tables and filters built in React, focusing
            on reusable components and API integration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
