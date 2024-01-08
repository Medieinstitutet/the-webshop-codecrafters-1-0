import "./../scss/style.scss";
import { allProducts } from "./allProductsPage/allProducts";
import { Order } from "./models/order";
import { Product } from "./models/product";
import { orderPage } from "./orderPage/orderPage";
 
 
 
export const shoppingcart: Product[] = [];


const main = async() => {



    await allProducts()



}

 main()
 
 
