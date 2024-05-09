import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ title, image, difficulty, id }) => {
  return (
    <Link to={`details/${id}`}>
    <div className="recipe-card">
      <img className="image"src={image} alt={title} />
      <h2>{title}</h2>
      <p>Difficulty: {difficulty}</p>
    </div>
    </Link>
  );
};

export default RecipeCard;