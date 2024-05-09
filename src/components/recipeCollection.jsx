import React, { useState, useEffect } from "react";
import RecipeCard from "./recipeCard";
import Navbar from "./Navbar";

function RecipeCollection() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="app">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            difficulty={recipe.difficulty}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeCollection;
