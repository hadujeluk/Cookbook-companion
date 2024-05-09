import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "../components/About";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
     path: '/about',
     element: <About/>

    
    }
  
   
]
    
)

export default route 