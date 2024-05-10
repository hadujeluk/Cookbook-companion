import React from "react";

const SortBar = ({ handleSortByDifficulty }) => {
  const handleSortChange = (event) => {
    const selectedDifficulty = event.target.value;
    handleSortByDifficulty(selectedDifficulty);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort by Difficulty:</label>
      <select id="sort-select" onChange={handleSortChange}>
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Intermediate">Intermediate</option>
      </select>
    </div>
  );
};

export default SortBar;