import { Product } from "../models/product";

/* Hämtar knappen som eventlistenern ska kopplas till och id:t 
pushas sedan till varukorgen */
export const shoppingcart: Product[] = [];

export const addProduct = (button: HTMLElement, id: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    shoppingcart.push(id);
    console.log(shoppingcart);
  });
};
