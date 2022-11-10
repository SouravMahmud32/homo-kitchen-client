import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import DetailsReview from "../../Pages/DetailsReview/DetailsReview";
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
        },
        {
            path: '/details/:id',
            element: <DetailsReview></DetailsReview>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/addservice',
            element: <AddService></AddService>
        },
        {
            path: '/addreview',
            element: <AddReview></AddReview>
        }
      ]
    }
  ]);

  export default router;
