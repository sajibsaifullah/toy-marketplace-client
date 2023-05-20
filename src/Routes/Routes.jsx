import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToys from "../pages/AddAToys/AddAToys";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage /> ,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'myToys',
          element: <MyToys></MyToys>
        },
        {
          path: 'addAToys',
          element: <AddAToys></AddAToys>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        }
    ]
  },
]);

export default router;
