import React from "react";
import { Link } from "react-router-dom";

const RenderDetails = ({
  portion,
  image,
  method,
  time,
  ingredients,
  description,
}) => {
  return (
    
    <div className="details">
      <div className="image-container">
        <img className="image" src={image} alt="Meal" />
        <div className="image-description">
          <h2 className="heading">{description}</h2>
        </div>
      </div>
      <div className="info-container"><Link to={`/recipes`}>
    <button type="button" className="btn">Go Back To Recipes</button>
  </Link>
        <div className="info">
          <p className="txt">Time: {time}</p>
          <p className="txt">Portion: {portion}</p>
        </div>
        <div className="content">
          <div className="ingredients">
            <h2 className="subheading">Ingredients</h2>
            {ingredients && ingredients.length > 0 ? (
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            ) : (
              <p>No ingredients found</p>
            )}
          </div>
          <div className="method">
            <h2 className="subheading">Method</h2>
            {method && method.length > 0 ? (
              <ol>
                {method.map((step, index) => (
                  <li key={index}>{Object.values(step)[0]}</li>
                ))}
              </ol>
            ) : (
              <p>No method steps found</p>
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default RenderDetails;
