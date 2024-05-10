import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

import About from "../components/About";

import RecipeCollection from "../components/recipeCollection";
import RecipeDetails from "../components/recipeDetails";
import Footer from "../components/Footer";
import RenderDetails from "../components/renderDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/recipes",
    element: <RecipeCollection />,
  },
  {
    path: "/details/:id",
    element: <RecipeDetails />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/recipes",
    element: <RenderDetails />,
  },
]);

export default route;
