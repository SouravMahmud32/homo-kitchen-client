import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import DetailsReview from "../../Pages/DetailsReview/DetailsReview";
import Errorpage from "../../Pages/Errorpage/Errorpage";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/details/:id",
        element: <DetailsReview></DetailsReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
