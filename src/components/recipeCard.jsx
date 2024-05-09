import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ title, image, difficulty, id }) => {
  return (
    
    <div className="recipe-card">
      <img className="image"src={image} alt={title} />
      <h2 className="text">{title}</h2>
      <p className="text">Difficulty: {difficulty}</p>
      <Link to={`details/${id}`}>
      <button type="button" class="btn btn-primary">View Recipe→</button>
      </Link>

    </div>

   
  );
};

export default RecipeCard;