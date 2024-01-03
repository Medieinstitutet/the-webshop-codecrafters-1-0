import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { oneProduct } from "./oneProduct";
import { restOfProducts } from "./restOfProducts"




export const productPage = async(oneProductArray: [], restOfProductsArray:[]) => {

   


if(oneProduct.length >= 1 && restOfProductsArray.length > 0){

/* create elements - oneProduct  */
const productPageContainer = document.createElement('article')
productPageContainer.classList.add('productPageContainer')
document.body.appendChild(productPageContainer)



const text: string = `Add   <i class="fa fa-shopping-basket"></i> `




oneProduct(oneProductArray, productPageContainer, text)


const productContainer = document.createElement('section')
productContainer.classList.add('productContainer')
productPageContainer.appendChild(productContainer)

restOfProducts(restOfProductsArray, productContainer)


}
}
