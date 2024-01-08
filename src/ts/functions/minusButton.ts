import { Product } from "../models/product";
import { updatePrice } from "./updatePrice";

export const buttonMinus = (
  basket: Product[],
  productId: string,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  const indexToRemove = basket.findIndex((product) => product._id === productId);
  if (indexToRemove !== -1) {
    const minusButton = document.createElement("button");
    minusButton.className = "minusButton";
    minusButton.innerHTML = "-";
    minusButton.addEventListener("click", () => {
      updatePrice(basket, productId, totalBasketPrice, onePrductPrice, totalPrice);
    });
    return minusButton;
  }
};
