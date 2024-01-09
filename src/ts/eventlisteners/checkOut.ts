

import { Order } from '../models/order'
import { Product } from '../models/product'
import { orderPage } from '../orderPage/orderPage'

export const checkOut  = async(items: Product[], totalPrice) => {


    const button =  document.querySelector<HTMLElement>('#orderButton');



        button?.addEventListener("click", (event: MouseEvent) => {
         event.preventDefault()
    

           
const firstname = document.querySelector('#firstname')?.value;
const lastname =  document.querySelector('#lastname')?.value;
const phone =  document.querySelector('#phone')?.value;
const street =  document.querySelector('#street')?.value;
const county =  document.querySelector("#county")?.value;
const postcode =  document.querySelector("#postcode")?.value;
const paymentmethod = 'Kort'




const orders: Order =  
{firstname,
lastname,
phone,
street,
postcode,
county,
paymentmethod,
totalPrice,
items:[...items]}


if(orders){



    const deletee =  document.querySelector(".checkoutContainer")

if(deletee){


deletee.remove()

}






orderPage(orders, totalPrice)
localStorage.setItem("basketarticles", JSON.stringify([]));
}


})

}
