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
            <a href="https://shamshu-portfolio.netlify.app">Live demo</a>
            <a href="https://github.com/Sham-interacts/my-portfolio">Code</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">Weather Information</div>
          <p className="project-desc">
            A lightweight web application that delivers real-time weather
            information using live API data. Designed with a responsive layout
            and intuitive UI to help users quickly access accurate weather
            details for any city.
          </p>
          <div className="project-links">
            <a href="https://vayucast.netlify.app/">Live demo</a>
            <a href="https://github.com/Sham-interacts/weather-info">Code</a>
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
