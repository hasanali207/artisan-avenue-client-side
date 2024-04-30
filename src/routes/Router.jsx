import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import DetailsCraftItem from "../components/DetailsCraftItem";
import ErrorPage from "../components/ErrorPage";
import SingleHomeData from "../components/SingleHomeData";
import AddItem from "../pages/AddItem";
import ArtCraft from "../pages/ArtCraft";
import CraftList from "../pages/CraftList";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Updatelist from "../pages/Updatelist";
import UserProfile from "../pages/UserProfile ";
import PrivateRoute from "../private/PrivateRoute";
import DetailsCraftItemHome from "../components/DetailsCraftItemHome";

const router = createBrowserRouter([
    {
       
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[{
        path: "/",
        element: <Home></Home>, 
        loader: () => fetch('https://artisan-avenue-server-sigma.vercel.app/items')
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
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> 
      },
      {
        path: "/AddItem",
        element: <PrivateRoute><AddItem></AddItem> </PrivateRoute>
      },
      {
        path: "/ArtCraft",
        element: <ArtCraft></ArtCraft>,
        loader: () => fetch('https://artisan-avenue-server-sigma.vercel.app/items'),
       
      },
      {
        path: "items/:id",
        element: <PrivateRoute><DetailsCraftItem></DetailsCraftItem></PrivateRoute>,
        loader: ({params}) => fetch(`https://artisan-avenue-server-sigma.vercel.app/items/${params.id}`)
        
      },
      {
        path: "/singledata/:id",
        element: <DetailsCraftItemHome></DetailsCraftItemHome>,
        loader: ({params}) => fetch(`https://artisan-avenue-server-sigma.vercel.app/data/sigledata/${params.id}`)        
      },


      {
        path: "homedata/:subcategory_name",
        element: <SingleHomeData></SingleHomeData>,
        loader: ({params}) => fetch(`https://artisan-avenue-server-sigma.vercel.app/data/homedata/${params.subcategory_name}`)
        
      },
      
      {
        path: "/craftlist",
        element: <PrivateRoute><CraftList></CraftList> </PrivateRoute>
      },
      {
        path: '/items/update/:id',
        element: <PrivateRoute><Updatelist></Updatelist></PrivateRoute>,
              
      }

    
    ]    
          }
    
  ]);
  export default router;