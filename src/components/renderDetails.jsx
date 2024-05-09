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
    <div className="details">
    <div>
      <div className="details">
      <div><img className="image" src={image} /></div>
      <div className="Dev"><p className="txt">Description: </p>{description}</div>
      </div>
      <br />
      <div><p className="txt">Portion: </p> {portion}</div>
      <br />
      <div><p className="txt">Time: </p>{time}</div>
      <br /><br />
      {ingredients && ingredients.length > 0 ? (
        <div>
          <p className="txt">Ingredients: </p>
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
  <div >
    <br />
    <p className="txt">Method: </p>
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
    </div>
  );
  
};
export default RenderDetails;
