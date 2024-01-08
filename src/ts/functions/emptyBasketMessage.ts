import { Product } from "../models/product";

export function basketEmptyMessage(basket: Product[]) {
  const emptyBasket = document.getElementById("basketEmpty") as HTMLTableSectionElement;
  const emptyBasketText = document.createElement("span");
  emptyBasketText.className = "basketEmptyText";
  emptyBasketText.innerHTML = "Your shoppingcart is empty";

  if (basket.length === 0) {
    emptyBasket?.appendChild(emptyBasketText);
  } else {
    emptyBasket.innerHTML = "";
  }
  return emptyBasket;
}
