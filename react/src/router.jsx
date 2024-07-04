
import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Users from "./view/Users";
import NotFound from "./view/NotFound";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
