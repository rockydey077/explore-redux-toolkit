import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import TopRated from "../pages/TopRated/TopRated";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductList from "../pages/Dashboard/ProductList";
import AddProduct from "../pages/Dashboard/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
