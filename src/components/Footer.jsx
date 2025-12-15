
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      © {year} Shamshirun Ibrahim. Built with React.
    </footer>
  );
}

export default Footer;
