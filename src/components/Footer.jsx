import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn,
  faQuestionCircle,
  faInfoCircle,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import "../components/Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
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
        <div className="links">
          <div className="link-group">
            <h3>Support</h3>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/help-center">Help Center</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Information</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/policy">Policy</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Feedback & Request</h3>
            <ul>
              <li><a href="/feedback">Feedback Form</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
