import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
feature/homepage-aboutpage
import About from "../components/About";
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
  path:'/',
  element:<Footer/>

    }
  
   
]
    
)

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
    path: "dishes/details/:id",
    element: <RecipeDetails />,
  },
]);


export default route;
