import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, image, difficulty, id }) => {
  return (
    <>
    
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h4 className="text">{title}</h4>
      <p className="text">Difficulty: {difficulty}</p>
      <Link to={`/details/${id}`}>
        <button type="button" className="btn btn-primary">
          View Recipe→
        </button>
      </Link>
    </div>
    </>
  );
};

export default RecipeCard;
