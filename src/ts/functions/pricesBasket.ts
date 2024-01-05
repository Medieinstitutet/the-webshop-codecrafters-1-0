import { Product } from "../models/product";

export const priceProduct = (basket: Product[], productId: string) => {
  let totalProductPrice = 0;

  for (let j = 0; j < basket.length; j++) {
    if (basket[j]._id === productId) {
      totalProductPrice += basket[j].price;
    }
  }

  return totalProductPrice;
};

export const basketPrice = (basket: Product[]) => {
  let total = 0;

  for (let j = 0; j < basket.length; j++) {
    total += basket[j].price;
  }

  return total;
};
