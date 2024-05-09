import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faGlobe, 
  faUsers, 
  faHeart, 
  faSmile, 
  faLeaf, 
  faStar, 
  faHandsHelping 
} from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-free/css/all.css";
import "../components/About.css"; 

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-header">Why Cook-Book Companion</h2>
        <div className="icon-group">
          <div className="icon-box">
            <FontAwesomeIcon icon={faUtensils} className="icon" />
            <p className="icon-text">Inspiration in the Kitchen</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <p className="icon-text">Recipes from Around the World</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <p className="icon-text">Culinary Community</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <p className="icon-text">Passion for Food</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faSmile} className="icon" />
            <p className="icon-text">Joyful Cooking Experience</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <p className="icon-text">Fresh and Healthy Recipes</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <p className="icon-text">High-Quality Ingredients</p>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faHandsHelping} className="icon" />
            <p className="icon-text">Supportive Community</p>
          </div>
        </div>
        <div className="about-paragraphs">
          <div className="paragraph-group">
            <FontAwesomeIcon icon={faUtensils} className="icon" />
            <p className="about-paragraph">
              At Cook-Book Companion, we believe that cooking should be a joyful and rewarding experience for everyone. Our recipe app is your culinary companion, designed to inspire and empower you in the kitchen.
            </p>
          </div>
          <div className="paragraph-group">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <p className="about-paragraph">
              Whether you're a seasoned chef or a novice cook, our app offers a treasure trove of delicious recipes from around the world. From mouthwatering appetizers to decadent desserts, there's something to tantalize every taste bud.
            </p>
          </div>
          <div className="paragraph-group">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <p className="about-paragraph">
              But Cook-Book Companion is more than just a recipe app. It's a culinary community where food lovers come together to share their passion, swap cooking tips, and connect with like-minded individuals from around the globe.
            </p>
          </div>
          <div className="paragraph-group">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <p className="about-paragraph">
              What sets us apart is our commitment to quality and innovation. Each recipe in our collection is carefully curated and tested by our team of expert chefs to ensure that it meets the highest standards of taste and excellence.
            </p>
          </div>
          <div className="paragraph-group">
            <FontAwesomeIcon icon={faSmile} className="icon" />
            <p className="about-paragraph">
              Join us on a journey of culinary discovery and unleash your inner chef with Delicious Delights. Let's cook up something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
