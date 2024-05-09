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
    <div class="container">
      <img className="image" src={image} />
      <div>{description}</div>
      <br />
      <div class="container">Portion: {portion}</div>
      <br />
      <div>Time: {time}</div>
      <br /><br />
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
    <br />
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
