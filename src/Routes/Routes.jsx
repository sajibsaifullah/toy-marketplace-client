import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToys from "../pages/AddAToys/AddAToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "addAToys",
        element: (
          <PrivateRoutes>
            <AddAToys></AddAToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "updateToy/:id",
        element: (
          <PrivateRoutes>
            <UpdateToy></UpdateToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-orcin.vercel.app/myToys/${params.id}`
          ),
      },
      {
        path: "toyDetails",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://toy-marketplace-server-orcin.vercel.app/allToys"),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
