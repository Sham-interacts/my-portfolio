import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies, tools, and practices I use to build reliable frontend
        applications.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <p>Core technologies for building modern web interfaces.</p>
          <div className="skill-tags">
            <span>React</span>
            <span>JavaScript (ES6+)</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Tailwind CSS</span>
            <span>Responsive Design</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>UI Architecture & Performance</h3>
          <p>Designing scalable, accessible, and maintainable UI systems.</p>
          <div className="skill-tags">
            <span>Reusable Components</span>
            <span>State Management</span>
            <span>Performance Optimisation</span>
            <span>UI Debugging</span>
            <span>Accessibility (ARIA)</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>API & Data Handling</h3>
          <p>Integrating and managing data from backend services.</p>
          <div className="skill-tags">
            <span>REST APIs</span>
            <span>Axios</span>
            <span>Async Data Fetching</span>
            <span>Error Handling</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools & Workflow</h3>
          <p>Development tools and team collaboration practices.</p>
          <div className="skill-tags">
            <span>Git</span>
            <span>CI/CD</span>
            <span>Agile / Scrum</span>
            <span>VS Code</span>
            <span>Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
