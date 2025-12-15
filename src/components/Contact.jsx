import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Let’s connect.</p>
      <div className="contact-card">
        <p>
          I’m currently seeking full-time frontend opportunities, and I’m also
          open to contract and freelance UI projects. Please feel free to reach
          out to discuss any opportunities.
        </p>
        <br />
        <p>
          📩 Email:
          <a href="mailto:shamshirun27@gmail.com">{"shamshirun27@gmail.com"}</a>
        </p>
        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/shamshirun/"
            target="_blank"
            rel="noreferrer"
          >
            {"https://www.linkedin.com/in/shamshirun/"}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
