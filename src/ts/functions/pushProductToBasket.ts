import { Product } from "../models/product";
import { createHtmlBasket } from "./createHtmlBasket";

let basket: Product[] = [];

export const pushProduct = (product: Product) => {
  basket.push(product);
  console.log(basket);
  createHtmlBasket(basket, product);
};
