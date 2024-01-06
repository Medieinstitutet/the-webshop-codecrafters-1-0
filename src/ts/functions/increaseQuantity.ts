import { Product } from "../models/product";

export const increaseQuantity = (basket: Product[], productId: string) => {
  let productQuantity = 0;

  for (let j = 0; j < basket.length; j++) {
    if (basket[j]._id === productId) {
      productQuantity += 1;
    }
  }

  return productQuantity;
};
