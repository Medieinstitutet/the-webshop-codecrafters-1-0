import { createHtmlBasket } from "../functions/createHtmlBasket";
import { shoppingcart } from "../main";
import { Product } from "../models/product";

/* Hämtar knappen som eventlistenern ska kopplas till och id:t 
pushas sedan till varukorgen */
// export const addProduct = (button:HTMLElement,  id: Product) => {

//     button.addEventListener('click', (event: MouseEvent) => {
//      event.preventDefault()
//      shoppingcart.push(id)
//      console.log(shoppingcart)
//     })
// }

let basket: Product[] = [];

export const addProduct = (button: HTMLElement, id: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    basket.push(id);
    createHtmlBasket(basket, id);
    console.log(basket);
  });
};
