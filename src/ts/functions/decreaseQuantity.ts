import { Product } from "../models/product";

export const decreaseQuantity = (
  basket: Product[],
  i: number,
  productQuantityNumber: HTMLSpanElement,
  basketArticles: HTMLTableSectionElement,
  basketOneProduct: HTMLElement
) => {
  if (basket.length > 0) {
    basket.splice(i, 1);
    let decreaseQuantityy = parseInt(productQuantityNumber.innerHTML);
    decreaseQuantityy = Math.max(0, decreaseQuantityy - 1);
    productQuantityNumber.innerHTML = decreaseQuantityy.toString();
    console.log(basket);
    if (productQuantityNumber.innerHTML === "0") {
      basketArticles.removeChild(basketOneProduct);
    }
  }
};
