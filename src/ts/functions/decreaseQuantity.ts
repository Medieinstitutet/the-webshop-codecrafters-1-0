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

    if (productQuantityNumber.innerHTML === "0") {
      basketArticles.removeChild(basketOneProduct);
    }
    // return decreaseQuantityy;
  }
};

// export const decreaseQuantity = (
//   basket: Product[],
//   i: number,
//   productId: string
// ) => {
//   basket.splice(i, 1);

//   let productQuantity = 0;

//   for (let j = 0; j < basket.length; j++) {
//     if (basket[j]._id === productId) {
//       productQuantity = Math.max(0, productQuantity - 1);
//     }
//   }
//   console.log("After decrease:", productQuantity);
//   return productQuantity;
// };
