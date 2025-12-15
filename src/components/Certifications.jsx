import React from "react";

function Certifications() {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications & Continuous Learning</h2>
      <p className="section-subtitle">
        Relevant certifications that support my frontend development experience
        and ongoing learning.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend & Web Development</h3>
          <ul className="cert-list">
            <li>React – The Complete Guide (Infosys)</li>
            <li>JavaScript (Infosys)</li>
            <li>Learn HTML, CSS & JavaScript from Scratch (Educative)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Additional Learning</h3>
          <ul className="cert-list">
            <li>Introduction to Python (Infosys)</li>
            <li>Intermediate SQL (Educative)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
