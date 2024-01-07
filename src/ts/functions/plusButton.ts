import { Product } from "../models/product";
import { increaseQuantity } from "./increaseQuantity";
import { updatePrice } from "./updatePrice";

export const buttonPlus = (
  basket: Product[],
  productId: string,
  productQuantityNumber: HTMLSpanElement,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  const indexToRemove = basket.findIndex(
    (product) => product._id === productId
  );
  if (indexToRemove !== -1) {
    const plusButton = document.createElement("button") as HTMLButtonElement;
    plusButton.className = "plusButton";
    plusButton.innerHTML = "+";
    plusButton.addEventListener("click", () => {
      const totalQuantityProductPlus = increaseQuantity(basket, productId);
      productQuantityNumber.innerHTML += totalQuantityProductPlus;
      updatePrice(
        basket,
        productId,
        totalBasketPrice,
        onePrductPrice,
        totalPrice
      );
      console.log(basket);
    });
    return plusButton;
  }
};
