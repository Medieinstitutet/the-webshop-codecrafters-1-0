import { Product } from "../models/product";

export const increaseQuantityPlusButton = (
  basket: Product[],
  product: Product,
  productQuantityNumber: HTMLSpanElement
) => {
  basket.push(product);
  increaseQuantityProductButton(productQuantityNumber);
  console.log(basket);
};

export const increaseQuantityProductButton = (
  productQuantityNumber: HTMLSpanElement
) => {
  let increaseQuantit = parseInt(productQuantityNumber.innerHTML);
  increaseQuantit += 1;
  productQuantityNumber.innerHTML = increaseQuantit.toString();
};
