import React from "react";

const RenderDetails = ({
  portion,
  image,
  method,
  time,
  ingredients,
  description,
}) => {
  return (
    <div>
      <img className="image" src={image} />
      <p>{description}</p>
      <p>Portion: {portion}</p>
      <p>Time: {time}</p>
      {ingredients && ingredients.length > 0 ? (
        <div>
          <p>Ingredients:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No ingredients found</p>
      )}
      {method && method.length > 0 ? (
  <div>
    <p>Method:</p>
    <ol>
      {method.map((step, index) => (
        <li key={index}>{Object.values(step)[0]}</li>
      ))}
    </ol>
  </div>
) : (
  <p>No method steps found</p>
)}

    </div>
  );
};
export default RenderDetails;
