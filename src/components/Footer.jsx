import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../components/Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/your-linkedin-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
      </div>
      <div className="signature">
        <span>© 2024 Cookbook Companion</span>
      </div>
    </footer>
  );
}

export default Footer;
