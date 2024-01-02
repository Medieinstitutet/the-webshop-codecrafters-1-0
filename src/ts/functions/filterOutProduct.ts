import { productPage } from "../productPage/productPage"
import { getProducts } from "./getProducts"
import { Product } from '../models/product';


export const filterOutProduct = async (id:string) => {
    const products = await getProducts()
    if(products && id){
    const oneProduct = products.filter(item => item._id === id) 
    const twoProduct = products.filter(item => item._id !== id) 
    if(oneProduct){
productPage(oneProduct<Product>, twoProduct<Product[]>)
    }
    }
}
