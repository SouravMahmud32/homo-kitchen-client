import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/allservices',
            element: <AllServices></AllServices>
        }
      ]
    }
  ]);

  export default router;
