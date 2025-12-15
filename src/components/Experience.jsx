import React from "react";

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        Professional experience in frontend development.
      </p>
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <div className="experience-role">Frontend Developer</div>
            <div className="experience-company">Infosys</div>
          </div>
          <div className="experience-dates">4 years</div>
        </div>
        <ul className="experience-list">
          <li>
            Built and maintained enterprise-scale frontend applications using
            React, JavaScript (ES6+), HTML5, and CSS3 for core banking and trade
            finance platforms.
          </li>
          <li>
            Designed and implemented reusable, component-driven UI architecture,
            improving consistency and maintainability across multiple modules
            and teams.
          </li>
          <li>
            Developed accessible UI components (ARIA-compliant accordion,
            keyboard-navigable components, debounced typeahead search) to
            improve usability and accessibility.
          </li>
          <li>
            Integrated REST APIs using Axios with React hooks (useEffect and
            custom hooks) to manage data fetching, loading and error states,
            retries, and predictable failure scenarios.
          </li>
          <li>
            Collaborated closely with backend engineers, QA, and UX designers in
            an Agile/Scrum environment, participating in sprint planning,
            reviews, and code walkthroughs.
          </li>
          <li>
            Performed focused functional and UI regression testing across
            finance and admin modules to minimise production issues before
            release.
          </li>
          <li>
            Ensured cross-browser compatibility, responsive design, and
            consistent behaviour across devices and locales, including i18n and
            RTL support.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
