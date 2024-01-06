import { Product } from "../models/product";
import { basketPrice, priceProduct } from "./prices";

export const updatePrice = (
  basket: Product[],
  productId: string,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  const totalProductPrice = priceProduct(basket, productId);
  onePrductPrice.innerHTML = totalProductPrice + " SEK";

  totalBasketPrice = basketPrice(basket);
  totalPrice.innerHTML = totalBasketPrice + " SEK";
};
