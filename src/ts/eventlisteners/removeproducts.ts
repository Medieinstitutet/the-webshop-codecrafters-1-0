import { createHtmlBasket } from "../functions/createHtmlBasket";
import { zeroOutPrice } from "../functions/zeroOutPrice";
import { Product } from "../models/product";

export const removeProduct = (
  button: HTMLElement,
  basket: Product[],
  productId: string,
  i: number,
  productQuantityNumber: HTMLSpanElement,
  basketArticles: HTMLTableSectionElement,
  basketOneProduct: HTMLElement,
  totalPrice: HTMLSpanElement,
  totalBasketPrice: number,
  id: Product
) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const indexToRemove = basket.findIndex(
      (product) => product._id === productId
    );

    if (indexToRemove !== -1) {
      basket.splice(i, 1);
      let decreaseQuantityy = parseInt(productQuantityNumber.innerHTML);
      decreaseQuantityy = Math.max(0, decreaseQuantityy - 1);
      productQuantityNumber.innerHTML = decreaseQuantityy.toString();

      if (productQuantityNumber.innerHTML === "0") {
        basketArticles.removeChild(basketOneProduct);
      }
      zeroOutPrice(basket, totalPrice, totalBasketPrice);

      createHtmlBasket(basket, id);

      console.log(basket);
    }
  });
};
