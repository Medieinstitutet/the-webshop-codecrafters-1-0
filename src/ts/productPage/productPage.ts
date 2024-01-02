import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { oneProduct } from "./oneProduct";
import { restOfProducts } from "./restOfProducts"



export const productPage= async(oneProductArray: [], restOfProductsArray:[]) => {

    const removeContainer = document.querySelector('.productPageContainer') as HTMLElement || null;

    if (removeContainer) {
        removeContainer.remove();
    }


if(oneProduct.length > 0 && restOfProductsArray.length > 0){

/* create elements - oneProduct  */
const productPageContainer = document.createElement('article')
productPageContainer.classList.add('productPageContainer')
document.body.appendChild(productPageContainer)





oneProduct(oneProductArray, productPageContainer)
restOfProducts(restOfProductsArray, productPageContainer)


}
}
