import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import CardsPage from "../components/CardsPage";
import ProductDtails from "../components/ProductDtails";
import Dashboard from "../pages/Dashboard";
import Product from "../components/Product";
import WishList from "../components/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <CardsPage />,
            loader: () => fetch("../categoryData.json"),
          },
          {
            path: "/cardspage/:cardspage",
            element: <CardsPage />,
            loader: () => fetch("../categoryData.json"),
          },
        ],
      },
      {
        path: "/dtails/:id",
        element: <ProductDtails />,
        loader: () => fetch("../categoryData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "productCard",
            element: <Product />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
        ],
      },
    ],
  },
]);

export default routes;
