import { Product } from "../models/product";

export const zeroOutPrice = (
  basket: Product[],
  totalPrice: HTMLSpanElement,
  totalBasketPrice: number
) => {
  if (basket.length === 0) {
    totalPrice.innerHTML = "0 SEK";
  } else {
    totalPrice.innerHTML = totalBasketPrice + " SEK";
  }
};
