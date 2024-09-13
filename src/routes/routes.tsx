import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/Register/SignUp";
import Login from "../pages/Register/Login";
import Product from "../pages/Products/Product";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ProductManage from "../pages/Product & Category Management/ProductManage";
import Checkout from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/productManage",
        element: <ProductManage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/proceed",
        element: <Cart />,
      },
      {
        path: "/proceed/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
