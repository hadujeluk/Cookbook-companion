import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

import About from "../components/About";

import RecipeCollection from "../components/recipeCollection";
import RecipeDetails from "../components/recipeDetails";
import Footer from "../components/Footer";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
     path: '/about',
     element: <About/>

    },
    {
  path:'/recipes',
  element:<RecipeCollection/>

    },
    {
      path: '/details/:id',
      element: <RecipeDetails />
    },
    {
      path:'/footer',
      element: <Footer />
    }

   
]
    
)

export default route;
