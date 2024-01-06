import { Product } from "../models/product";

export const removeObjectsWithXmark = (
  basket: Product[],
  productId: string
) => {
  for (let i = basket.length - 1; i >= 0; i--) {
    if (basket[i]._id === productId) {
      basket.splice(i, 1);
    }
  }
};
