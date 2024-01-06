import { Product } from "../models/product";
import { createHtmlBasket } from "./createHtmlBasket";
import { decreaseQuantity } from "./decreaseQuantity";
import { updatePrice } from "./updatePrice";
import { zeroOutPrice } from "./zeroOutPrice";

export const buttonMinus = (
  basket: Product[],
  i: number,
  productQuantityNumber: HTMLSpanElement,
  basketArticles: HTMLTableSectionElement,
  basketOneProduct: HTMLElement,
  totalPrice: HTMLSpanElement,
  totalBasketPrice: number,
  productId: string,
  onePrductPrice: HTMLParagraphElement,
  id: Product
) => {
  const minusButton = document.createElement("button") as HTMLButtonElement;
  minusButton.className = "minusButton";
  minusButton.innerHTML = "-";
  minusButton.addEventListener("click", () => {
    decreaseQuantity(
      basket,
      i,
      productQuantityNumber,
      basketArticles,
      basketOneProduct
    );
    zeroOutPrice(basket, totalPrice, totalBasketPrice);

    updatePrice(
      basket,
      productId,
      totalBasketPrice,
      onePrductPrice,
      totalPrice
    );

    createHtmlBasket(basket, id);
  });
  return minusButton;
};
