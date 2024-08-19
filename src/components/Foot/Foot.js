import React from "react";
import "./Foot.css";

const Foot = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <a
          href="https://github.com/MartyPR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github icons-foot"></i>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/martin-parada-rodriguez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin icons-foot"></i>
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-instagram icons-foot"></i>
        </a>
        <br />
        <a href="https://x.com/MartyPR23"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-twitter icons-foot"></i>
        </a>
      </div>
    </div>
  );
};

export default Foot;
