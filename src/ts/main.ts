import "./../scss/style.scss";
import { allProducts } from "./allProductsPage/allProducts";
import { filterOutProduct } from "./functions/filterOutProduct";
import { getProducts } from "./functions/getProducts";










const product = await getProducts()

const shoppingcart: [] = [];

allProducts()
/* filterOutProduct('658c0822982493ac38e5094f') */
