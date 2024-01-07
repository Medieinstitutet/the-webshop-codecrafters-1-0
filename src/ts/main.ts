import "./../scss/style.scss";
import { allProducts } from "./allProductsPage/allProducts";
import { Product } from "./models/product";
import { openBasket } from "./functions/openBasket";
import { closeBasket } from "./functions/closeBasket";
import { getFromLocalstorage } from "./eventlisteners/addProduct";

export const shoppingcart: Product[] = [];

allProducts();
// getFromLocalstorage();
openBasket();
closeBasket();
