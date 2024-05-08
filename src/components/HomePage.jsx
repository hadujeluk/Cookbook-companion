import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "./Navbar";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/home/shelvin/developments/REACT/Cookbook-companion/db.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
