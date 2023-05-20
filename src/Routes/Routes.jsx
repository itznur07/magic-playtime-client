import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Registration from "../pages/Registration/Registration";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
    ],
  },
]);

export default router;
