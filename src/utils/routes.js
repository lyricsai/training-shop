import ErrorPage from "../pages/error-page/ErrorPage";
import MainPage from "../pages/main-page/MainPage";
import ProductPage from "../pages/product-page/ProductPage";
import ProductsPage from "../pages/products-page/ProductsPage";
import { ERROR_ROUTE, MAIN_ROUTE, MEN_ROUTE, WOMEN_ROUTE } from "./consts";

export const publicRoutes = [
    { path: MAIN_ROUTE, Component: MainPage },
    { path: WOMEN_ROUTE, Component: ProductsPage, category: 'women' },
    { path: MEN_ROUTE, Component: ProductsPage, category: 'men' },
    { path: ERROR_ROUTE, Component: ErrorPage },
    { path: WOMEN_ROUTE + '/:id', Component: ProductPage, category: 'women' },
    { path: MEN_ROUTE + '/:id', Component: ProductPage, category: 'men' },
]