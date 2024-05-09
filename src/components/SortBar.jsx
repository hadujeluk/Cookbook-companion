import React from "react";
import { useState } from "react";
function SortBar({ recipe }) {
  const [sortRecipe, setSortRecipe] = useState(
    recipe && recipe.length ? [...recipe] : []
  );

  const handleSortChange = () => {
    if (!recipe || !recipe.length) return;
    const sort = [...recipe];

    if (option === "") {
      sort.sort((a, b) => a.difficulty - b.difficulty);
    }
    setSortRecipe(sort);
  };

  return (
    <>
      <div className="sort-bar">
        <label htmlFor="sort-select">Sort Recipe by:</label>
        <select id="select" onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">All</option>
          <option value="">Easy</option>
          <option value="">Intermediate</option>
        </select>
      </div>
      <ul>
        {sortRecipe.map((recipe) => (
          <li key={recipe.id}>{}</li>
        ))}
      </ul>
    </>
  );
}

export default SortBar;
