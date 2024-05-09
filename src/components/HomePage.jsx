import React, { useState, useEffect } from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/HomePage.css"; 
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1 className="header">A Chef In Every Tasty Meal Box</h1>
        <p className="paragraph">At the heart of our website lies a powerful search engine that empowers users to effortlessly navigate through thousands of mouthwatering dishes. Whether you're in the mood for a quick and healthy weeknight meal, a decadent dessert to impress your guests, or a delectable international cuisine, our search functionality allows you to filter by ingredients, dietary restrictions, cooking time, and difficulty level, ensuring you find the perfect recipe to suit your needs</p>
        <div className="buttons-container">
          <Link to={'/recipes'}>
          <button className="button-primary">Explore Recipes</button>
          </Link>
          <Link to={'/footer'}>
          <button className="button-secondary">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
