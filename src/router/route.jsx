import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import RecipeCollection from "../components/recipeCollection";
import RecipeDetails from "../components/recipeDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dishes",
    element: <RecipeCollection />,
  },
  {
    path: "details/:id",
    element: <RecipeDetails />,
  },
]);

export default route;
