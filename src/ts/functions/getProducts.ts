import axios from 'axios';
import { Product } from '../models/product';
import productsfromjson from '../../../public/products.json'
export  const getProducts = async() => {
const url: string = import.meta.env.VITE_URL;
const Array : Product[] = [];
try {
    const {data} = await axios.get<Product[]>(`${url}`)
    if (data.length > 0) {
        data.forEach((item) => {
            Array.push(item)
         })
    } 
} catch{
    productsfromjson.forEach((item) => {
        Array.push(item)
     })
}
return Array
}