import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle, faInfoCircle, faComments } from "@fortawesome/free-solid-svg-icons";
import "../components/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <h3>Social Media</h3>
        <div className="icon-group">
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <span>Twitter</span>
          </a>
          <a href="https://facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
            <span>Facebook</span>
          </a>
          <a href="https://instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <span>Instagram</span>
          </a>
          <a href="https://linkedin.com/company/your-linkedin-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <h3>Information</h3>
        <div className="link-group">
          <FontAwesomeIcon icon={faQuestionCircle} className="link-icon" />
          <a href="/faqs" className="link">FAQs</a>
        </div>
        <div className="link-group">
          <FontAwesomeIcon icon={faInfoCircle} className="link-icon" />
          <a href="/about" className="link">About Us</a>
          <a href="/policy" className="link">Policy</a>
        </div>
        <div className="link-group">
          <FontAwesomeIcon icon={faComments} className="link-icon" />
          <a href="/feedback" className="link">Feedback & Requests</a>
        </div>
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="signature">
        <span>© 2024 Cookbook Companion</span>
      </div>
    </footer>
  );
}

export default Footer;
