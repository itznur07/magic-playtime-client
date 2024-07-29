import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import Dashboard from "../pages/Admin/Dashboard";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Carts from "../pages/Carts/Carts";
import Checkout from "../pages/Carts/Checkout";
import Error from "../pages/ErrorPages/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Registration from "../pages/Registration/Registration";
import Shop from "../pages/Shop/Shop";
import BlogDetails from "../pages/SingleBlog/BlogDetails";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToys from "../pages/ToysUpdate/Updated";
import Wishlists from "../pages/Wishlists/Wishlists";
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
        path: "/admin",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlists",
        element: <Wishlists></Wishlists>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
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
        path: "/blogs/:id",
        element: <BlogDetails />,
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
      {
        path: "/updateToy/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-six.vercel.app/mytoys/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
