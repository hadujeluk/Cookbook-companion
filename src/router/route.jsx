import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
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

export default route 