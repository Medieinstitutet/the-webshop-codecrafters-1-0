import "./../scss/style.scss";
import { allProducts } from "./allProductsPage/allProducts";
import { Order } from "./models/order";
import { Product } from "./models/product";
import { openBasket } from "./functions/openBasket";
import { closeBasket } from "./functions/basketPage/closeBasket";
import { addProductToBasket } from "./eventlisteners/addProductsBasket";

export const shoppingcart: Product[] = [];

openBasket();
closeBasket();

const main = async () => {
  /* await allProducts() */
  // addProductToBasket()
};

main();
