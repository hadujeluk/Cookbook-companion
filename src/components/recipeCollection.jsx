import React, { useState, useEffect } from 'react';
import RecipeCard from './recipeCard';
import Navbar from './Navbar';
import Search from './Search';

function RecipeCollection() {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setSortedRecipes(data);
      });
  }, []);

  const filteredRecipes = sortedRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSortByDifficulty = (difficulty) => {
    const sortedByDifficulty = recipes.filter((recipe) => {
      if (difficulty === '') return true;
      return recipe.difficulty === difficulty;
    });

    setSortedRecipes(sortedByDifficulty);
  };

  return (
    <div>
      <Navbar />
      <Search
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        handleSortByDifficulty={handleSortByDifficulty}
      />

      <div className="app">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            difficulty={recipe.difficulty}
            portion={recipe.portion}
            time={recipe.time}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeCollection;