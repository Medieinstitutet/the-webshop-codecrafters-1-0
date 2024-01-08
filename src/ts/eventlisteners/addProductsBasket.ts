import { createHtmlBasket } from "../functions/basketPage/createHtmlBasket";
import { Product } from "../models/product";

let basket: Product[] = [];

// Funktion för att lägga till en produkt i varukorgen när en knapp klickas
export const addProductToBasket = (button: HTMLElement, id: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    // Lägg till den valda produkten i varukorgen.
    basket.push(id);
    // Uppdatera det visuella gränssnittet för varukorgen.
    createHtmlBasket(basket, id);
  });
};
