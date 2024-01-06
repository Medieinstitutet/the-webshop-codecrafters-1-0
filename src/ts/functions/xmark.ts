import { Product } from "../models/product";
import { createHtmlBasket } from "./createHtmlBasket";
import { removeObjectsWithXmark } from "./removeProductWithXmark";
import { zeroOutPrice } from "./zeroOutPrice";

export const xmark = (
  basket: Product[],
  productId: string,
  totalPrice: HTMLSpanElement,
  totalBasketPrice: number,
  id: Product
) => {
  const oneProductXmark = document.createElement("section");
  oneProductXmark.className = "oneProduct--xmark";
  oneProductXmark.innerHTML = "X";

  oneProductXmark.addEventListener("click", () => {
    removeObjectsWithXmark(basket, productId);
    zeroOutPrice(basket, totalPrice, totalBasketPrice);
    createHtmlBasket(basket, id);
    console.log(basket);
  });

  return oneProductXmark;
};
