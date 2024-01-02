import "./../scss/style.scss";
import { filterOutProduct } from "./functions/filterOutProduct";
import { getProducts } from "./functions/getProducts";








const product = await getProducts()

const shoppingcart: [] = [];



if(product){

const id: string = product[0]._id

   filterOutProduct(id)


}