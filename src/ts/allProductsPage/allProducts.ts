
import { getProducts } from '../functions/getProducts';
import { oneProduct } from '../productPage/oneProduct';

export const allProducts = async() => {
 

    const productArray = await getProducts()

   

    

    if(productArray){
        const productContainer = document.createElement('section')
        productContainer.classList.add('productContainerAllProducts')
        document.body.appendChild(productContainer)


        productArray.forEach(item => {
            const text: string = `read more` ;
         let  itemArray:[] = [];
         itemArray.push(item)
         if(itemArray){
            oneProduct(itemArray, productContainer, text)
           
           
}

})




    }


}
