import "./../scss/style.scss";
import { filterOutProduct } from "./functions/filterOutProduct";
import { getProducts } from "./functions/getProducts";



/* hämtar produkter och sparas i variabeln product */

const product = await getProducts()

const shoppingcart: [] = [];


/* behövs inte för er, kan tas bort */
if(product){

const id: string = product[0]._id

   filterOutProduct(id)


}