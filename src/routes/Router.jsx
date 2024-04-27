import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ArtCraft from "../pages/ArtCraft";
import AddItem from "../pages/AddItem";
import CraftList from "../pages/CraftList";
import DetailsCraftItem from "../components/DetailsCraftItem";
import Register from "../pages/Register";
import PrivateRoute from "../private/PrivateRoute";
import UserProfile from "../pages/UserProfile ";

const router = createBrowserRouter([
    {
       
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[{
        path: "/",
        element: <Home></Home>, 
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: "/Login",
        element: <Login></Login> 
      },
      {
        path: "/Register",
        element: <Register></Register> 
      },
      {
        path: "/UserProfile",
        element: <UserProfile></UserProfile> 
      },
      {
        path: "/AddItem",
        element: <PrivateRoute><AddItem></AddItem> </PrivateRoute>
      },
      {
        path: "/ArtCraft",
        element: <ArtCraft></ArtCraft>,
        loader: () => fetch('http://localhost:5000/items'),
       
      },
      {
        path: "DetailsCraftItem/:id",
        element: <PrivateRoute><DetailsCraftItem></DetailsCraftItem></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        
      },
      
      {
        path: "/craftlist",
        element: <PrivateRoute><CraftList></CraftList> </PrivateRoute>
      },

    
    ]    
          }
    
  ]);
  export default router;