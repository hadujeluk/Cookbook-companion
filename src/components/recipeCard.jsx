import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ title, image, difficulty, id }) => {
  return (
    <Link to={`details/${id}`}>
    <div className="recipe-card">
      <img className="image"src={image} alt={title} />
      <h2 className="text">{title}</h2>
      <p className="text">Difficulty: {difficulty}</p>
    </div>
    </Link>
  );
};

export default RecipeCard;