import React from 'react'

const renderDetails = ({
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
        <p>Difficulty: {difficulty}</p>
        <p>Portion: {portion}</p>
        <p>Time: {time}</p>
        <p>Ingredients: {ingredients}</p>
        <p>Method: {method}</p>
      </div>
    );
  };
export default renderDetails