import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-photo-view/dist/react-photo-view.css';
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {

  return (
    <div className="text-center">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
