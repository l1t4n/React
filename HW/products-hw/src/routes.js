import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainLayout } from "./layouts";
import { CategoriesPage, CartPage, ProductsPage, ErrorPage, ProductPage } from "./pages";

export const getRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductPage/>} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
};
