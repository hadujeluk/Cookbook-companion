import { useState, useEffect } from "react";
import RecipeCard from "./recipeCard";
import Navbar from "./Navbar";
import Search from "./Search";

function RecipeCollection() {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Search setSearchInput={setSearchInput} searchInput={searchInput} />
     
      <div className="app">
        {filteredRecipes.map((recipe) => (
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
