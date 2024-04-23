import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LoginSignup/Login";
import Signup from "../pages/LoginSignup/Signup";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import ProductDetails from "../pages/Product/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CategoryWise from "../pages/Category/CategoryWise";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../pages/Dashboard/Add/AddProduct";
import ListProduct from "../pages/Dashboard/ListProduct/ListProduct";
import ListUsers from "../pages/Dashboard/ListUsers/ListUsers";
import Error from "../components/Error/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/category/:sub_category",
        element: <CategoryWise />,
      },
      {
        path: "/product/:itemName",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/listproduct",
        element: <ListProduct />,
      },
      {
        path: "/dashboard/listuser",
        element: <ListUsers />,
      },
    ],
  },
]);

export default router;
