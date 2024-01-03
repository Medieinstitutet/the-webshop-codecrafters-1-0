import { productPage } from "../productPage/productPage"
import { getProducts } from "./getProducts"
import { Product } from '../models/product';


export const filterOutProduct = async (id:string) => {
    const products = await getProducts()

    const deleteContainer = document.querySelector<HTMLInputElement>('.productContainerAllProducts')
    const del = document.querySelector<HTMLInputElement>('.productContainer')
        if (del) {
            del.remove();
        }

        if(deleteContainer){
            deleteContainer.remove();
        }
  
    if(products && id){
    const oneProduct = await products.filter(item => item._id === id) 
    const twoProduct = await products.filter(item => item._id !== id) 
 if(oneProduct && twoProduct){

productPage(oneProduct<Product[]>, twoProduct<Product[]>)
    }
    }
}
