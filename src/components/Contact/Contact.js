import React from "react";
import "./Contact.css";

const Contact = () => {
    
  return (
    <div className="container-block-container">
      <div className="contact-container">
        <h2 className="section-title">Contact Information</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:martin.p1131@gmail.com">martin.p1131@gmail.com</a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/MartyPR"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MartyPR
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/martin-parada-rodriguez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/Martin-parada-rodriguez
            </a>
          </p>
          <p>
            <strong>Location:</strong> Bogota, Colombia
          </p>
          <p>
            <strong>Phone:</strong> +57 311
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
