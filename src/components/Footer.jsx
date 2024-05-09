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
          <a href="#facebook">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="#twitter">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="#instagram">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="#linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </div>
        <div className="links">
          <div className="link-group">
            <h3>Support</h3>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#help-center">Help Center</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Information</h3>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#policy">Policy</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Feedback & Request</h3>
            <ul>
              <li><a href="#feedback">Feedback Form</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="signature">
          <span>© 2024 Cookbook Companion</span>
        </div>
        <div className="extra-info">
          <a href="#faqs"><FontAwesomeIcon icon={faQuestionCircle} className="footer-icon" /></a>
          <a href="#about-us"><FontAwesomeIcon icon={faInfoCircle} className="footer-icon" /></a>
          <a href="#feedback"><FontAwesomeIcon icon={faCommentAlt} className="footer-icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
