import { Product } from "./product";


export interface Order{
  firstname: string,
  lastname:string,
  phone:number,
street: string,
postcode:number,
county: string,
paymentmethod: string,
totalprice:number,
items:Product[]

    }