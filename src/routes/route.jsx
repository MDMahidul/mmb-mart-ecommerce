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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/men',
        element:<Men/>
      },
      {
        path:'/women',
        element:<Women/>
      },
      {
        path:'/kids',
        element:<Kids/>
      },
      {
        path:'/product/:id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
    ],
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/signup",
    element:<Signup/>
  },
]);

export default router;