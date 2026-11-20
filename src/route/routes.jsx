import {
    createBrowserRouter
  } from "react-router-dom";
 import Root from "./pages/Root"; 
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Blogs from "../components/Blog/Blogs";
import BlogDetails from "../components/Blog/BlogDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Booking from "./pages/Booking/Booking";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            // loader: () => fetch("/services.json"),
            
        },
        {
            path:"/services/:id",
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: () => fetch("/Services.json")
        },
        {
            path:"/login",
            element: <Login></Login>,
           
        },
        {
          path:"/register",
          element: <Register></Register>,
          
        },
        {
          path:"/Services",
          element: <Services></Services>,
          
          
        },
        {
          path:"/blogs",
          element: <Blogs></Blogs>,
          // loader: () => fetch("/blog.json")
          
        },
        {
          path:"/blogs/:id",
          element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
          loader: () => fetch("/Blog.json")
          
        },
        {
          path:"/booking",
          element: <PrivateRoute><Booking></Booking></PrivateRoute>,
          
        },

      ]
      
    },
  ]);

export default router