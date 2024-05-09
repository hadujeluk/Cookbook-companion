import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/HomePage.css"; 


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
        <p className="paragraph">Explore a world of flavors and unleash your culinary creativity with our delightful collection of recipes. From quick and easy meals to gourmet delights, we've got something for every taste bud.</p>
        <div className="buttons-container">
          <button className="button-primary">Explore Recipes</button>
          <button className="button-secondary">Learn More</button>
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
