import React from "react";
import "../components/About.css"; 

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-header">Welcome to Our Recipe App</h2>
        <p className="about-paragraph">
          At Delicious Delights, we believe that cooking should be a joyful and rewarding experience for everyone. Our recipe app is your culinary companion, designed to inspire and empower you in the kitchen.
        </p>
        <p className="about-paragraph">
          Whether you're a seasoned chef or a novice cook, our app offers a treasure trove of delicious recipes from around the world. From mouthwatering appetizers to decadent desserts, there's something to tantalize every taste bud.
        </p>
        <p className="about-paragraph">
          What sets us apart is our commitment to quality and innovation. Each recipe in our collection is carefully curated and tested by our team of expert chefs to ensure that it meets the highest standards of taste and excellence.
        </p>
        <p className="about-paragraph">
          But Delicious Delights is more than just a recipe app. It's a culinary community where food lovers come together to share their passion, swap cooking tips, and connect with like-minded individuals from around the globe.
        </p>
        <p className="about-paragraph">
          Join us on a journey of culinary discovery and unleash your inner chef with Delicious Delights. Let's cook up something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
