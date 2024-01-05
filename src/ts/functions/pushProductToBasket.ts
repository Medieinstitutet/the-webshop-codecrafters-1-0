import { Product } from "../models/product";
import { createHtmlBasket } from "./createHtmlBasket";

let basket: Product[] = [];

export const pushProduct = (product: Product) => {
  basket.push(product);
  createHtmlBasket(basket, product);
  console.log(basket);
};
