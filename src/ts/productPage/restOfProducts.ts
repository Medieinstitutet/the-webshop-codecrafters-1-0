import { Product } from "../models/product"


export const restOfProducts = (restOfProducts:Product[], productPageContainer:HTMLElement) => {
    if (restOfProducts && restOfProducts.length > 0 && productPageContainer ) {



        for (let i in restOfProducts){ 
      


        /* selected product */
        const manyProducts = document.createElement('section')
        manyProducts.classList.add('manyProducts')
        
        
        /* selected product image and description container*/
        const imgAndDescription = document.createElement('section')
        imgAndDescription.classList.add('imgAndDescription')
        
        /*  image */
        const imgAndDescription___imgContainer = document.createElement('section')
        imgAndDescription___imgContainer.classList.add('imgAndDescription___imgContainer')
        const imgAndDescription___imgContainer___img = document.createElement('img')
        imgAndDescription___imgContainer___img.classList.add('imgAndDescription___imgContainer___img')
        
            imgAndDescription___imgContainer___img.src = restOfProducts[i].image;
         
        /* description  */
        const imgAndDescription___description = document.createElement('p')
        imgAndDescription___description.classList.add('imgAndDescription___description')
        
        
        /* button */
        
        
        const imgAndDescription___button = document.createElement('button')
        imgAndDescription___button.classList.add('imgAndDescription___button')
        imgAndDescription___button.innerHTML = ` <i class="fa fa-shopping-basket"></i> ` ;
        
        
        /*  titel */
        const selectedProduct___titel = document.createElement('h2')
        selectedProduct___titel.classList.add('selectedProduct___titel')
        selectedProduct___titel.innerText = restOfProducts[i].titel;
        
        
        /* append elements */

        
        /* selected product */
        productPageContainer.appendChild(manyProducts)
        
         /* image */
         manyProducts.appendChild(imgAndDescription)
         imgAndDescription.appendChild(imgAndDescription___imgContainer)
         imgAndDescription___imgContainer.appendChild(imgAndDescription___imgContainer___img)
        
        
        
        /* selected product titel */
        manyProducts.appendChild(selectedProduct___titel)
        
        
    
        /* description  */
     /*    
        imgAndDescription.appendChild(imgAndDescription___description)
        imgAndDescription___description.appendChild(imgAndDescription___button) */



    }

        }




}
