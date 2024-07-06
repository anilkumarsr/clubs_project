
import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Users from "./view/Users";
import NotFound from "./view/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./view/Dashboard";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  {
    path:'/',
    element:<DefaultLayout/>,
    children:[
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },

      ]
  },
  {
    path:'/',
    element:<GuestLayout/>,
    children:[
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
     
      ]
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/aboutus',
    element: <About/>
  },
 
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
