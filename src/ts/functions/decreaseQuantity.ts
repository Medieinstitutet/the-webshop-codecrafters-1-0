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
    let decreaseQuantity = parseInt(productQuantityNumber.innerHTML);
    decreaseQuantity = Math.max(0, decreaseQuantity - 1);
    productQuantityNumber.innerHTML = decreaseQuantity.toString();
    console.log(basket);
    if (productQuantityNumber.innerHTML === "0") {
      basketArticles.removeChild(basketOneProduct);
    }
  }
};
