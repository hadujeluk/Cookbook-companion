import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RenderDetails from "./renderDetails";
import Navbar from "./Navbar"

function RecipeDetails() {
  const [dishes, setDishes] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <RenderDetails
        key={dishes.id}
        portion={dishes.portion}
        time={dishes.time}
        description={dishes.description}
        ingredients={dishes.ingredients}
        method={dishes.method}
        image={dishes.image}
      />
    </div>
  );
}

export default RecipeDetails;
